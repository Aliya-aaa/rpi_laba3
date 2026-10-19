import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900"
          alt="Преподаватель за работой"
          className="hero__image"
        />
      </div>

      <div className="hero__content">
        <span className="hero__badge">Онлайн и офлайн · по всей России</span>

        <h1 className="hero__title">
          Наши лекторы — признанные специалисты в своих областях,
          готовые делиться опытом и знаниями.
        </h1>

        <p className="hero__subtitle">
          10 экспертов и 30 дисциплин: от алгоритмов и биохимии
          до архитектуры и психологии.
        </p>

        <div className="hero__actions">
          <Link to="/lecturers" className="hero__cta">
            <span>Найти лектора</span>
            <span className="hero__cta-arrow">→</span>
          </Link>
        </div>
      </div>

      <style>{`
        .hero {
          display: flex;
          padding: 40px;
          gap: 40px;
          align-items: center;
          border-bottom: 1px solid #ddd;
          background: linear-gradient(135deg, #f5f3ff 0%, #eef2ff 100%);
        }
        .hero__image-container { flex: 1; min-width: 0; }
        .hero__image {
          width: 100%;
          max-height: 420px;
          object-fit: cover;
          display: block;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(58, 54, 140, 0.15);
        }
        .hero__content { flex: 1; min-width: 0; }
        .hero__badge {
          display: inline-block;
          background: #eef0ff;
          color: #4f46e5;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .hero__title {
          font-size: 32px;
          line-height: 1.35;
          margin: 0 0 16px;
          color: #1f2937;
          letter-spacing: -0.5px;
        }
        .hero__subtitle {
          font-size: 17px;
          color: #6b7280;
          margin: 0 0 32px;
          line-height: 1.6;
        }
        .hero__actions {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        /* Яркая кнопка */
        .hero__cta {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%);
          color: #fff;
          padding: 18px 36px;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .hero__cta:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(245, 158, 11, 0.55),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        .hero__cta-arrow { transition: transform 0.2s; }
        .hero__cta:hover .hero__cta-arrow { transform: translateX(4px); }

        /* Бегущий блик по кнопке */
        .hero__cta::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: heroShimmer 3s infinite;
        }
        @keyframes heroShimmer {
          0%   { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }

        .hero__cta-secondary {
          color: #4f46e5;
          font-weight: 600;
          text-decoration: none;
          padding: 16px 8px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
        }
        .hero__cta-secondary:hover { border-color: #4f46e5; }

        /* Адаптивность */
        @media (max-width: 900px) {
          .hero { flex-direction: column; padding: 30px 20px; gap: 30px; }
          .hero__image { max-height: 300px; }
          .hero__title { font-size: 26px; }
        }
        @media (max-width: 480px) {
          .hero { padding: 24px 16px; }
          .hero__title { font-size: 22px; }
          .hero__actions { flex-direction: column; align-items: stretch; }
          .hero__cta { justify-content: center; }
          .hero__cta-secondary { text-align: center; }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;