import React, { useState, useEffect } from 'react';

export default function ApplicationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [sent, setSent] = useState(false);

  // Блокируем скролл страницы, пока открыта модалка
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const saved = JSON.parse(localStorage.getItem('applications') || '[]');
      localStorage.setItem(
        'applications',
        JSON.stringify([...saved, { ...form, createdAt: new Date().toISOString() }])
      );
    } catch {}
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    setForm({ name: '', contact: '', message: '' });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(17, 24, 39, 0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: '20px',
        animation: 'fadeIn 0.2s ease'
      }}
      onClick={handleClose}
    >
      <div
        style={{
          background: 'white', borderRadius: '16px',
          padding: '32px', maxWidth: '480px', width: '100%',
          boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
          position: 'relative',
          animation: 'slideUp 0.25s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'none', border: 'none', fontSize: '24px',
            cursor: 'pointer', color: '#6b7280', lineHeight: 1
          }}
          aria-label="Закрыть"
        >
          ×
        </button>

        {!sent ? (
          <>
            <h2 style={{ margin: '0 0 8px', fontSize: '24px' }}>Оставить заявку</h2>
            <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '14px' }}>
              Расскажите о вашей цели — мы подберём преподавателя и свяжемся в течение дня.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <label style={{ display: 'grid', gap: '6px', fontSize: '14px', fontWeight: '600' }}>
                Как к вам обращаться?
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  style={inputStyle}
                />
              </label>

              <label style={{ display: 'grid', gap: '6px', fontSize: '14px', fontWeight: '600' }}>
                Телефон или e-mail
                <input
                  name="contact"
                  required
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="+7 (900) 000-00-00 или mail@example.com"
                  style={inputStyle}
                />
              </label>

              <label style={{ display: 'grid', gap: '6px', fontSize: '14px', fontWeight: '600' }}>
                Чему хотите научиться?
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Например: подготовка к ЕГЭ по физике, уровень — средний"
                  rows="3"
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                />
              </label>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                  color: 'white', border: 'none', padding: '14px 20px',
                  borderRadius: '10px', fontSize: '16px', fontWeight: '600',
                  cursor: 'pointer', marginTop: '8px',
                  transition: 'transform 0.15s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(79, 70, 229, 0.35)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                Отправить заявку
              </button>

              <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0, textAlign: 'center' }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: '#10b981', color: 'white', fontSize: '36px',
              display: 'grid', placeItems: 'center', margin: '0 auto 20px'
            }}>
              ✓
            </div>
            <h2 style={{ margin: '0 0 12px' }}>Заявка отправлена!</h2>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>
              Мы свяжемся с вами в течение рабочего дня.
            </p>
            <button onClick={handleClose} style={{
              background: '#4f46e5', color: 'white', border: 'none',
              padding: '12px 24px', borderRadius: '10px', cursor: 'pointer',
              fontWeight: '600'
            }}>
              Отлично
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </div>
  );
}

const inputStyle = {
  padding: '12px 14px',
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  fontSize: '15px',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s'
};