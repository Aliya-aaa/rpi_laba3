import React from 'react';

function Header({ currentPage, onNavigate, onSectionClick, onOpenModal }) {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <button 
          style={currentPage === 'home' ? styles.activeLink : styles.link}
          onClick={() => onNavigate('home')}
        >
          Главная
        </button>
        <button 
          style={currentPage === 'home' ? styles.link : styles.link}
          onClick={() => onSectionClick('partners')}
        >
          Партнёры
        </button>
        <button 
          style={currentPage === 'home' ? styles.link : styles.link}
          onClick={() => onSectionClick('about')}
        >
          О нас
        </button>
        <button 
          style={currentPage === 'teachers' ? styles.activeLink : styles.link}
          onClick={() => onNavigate('teachers')}
        >
          Лекторы
        </button>
        {onOpenModal && (
          <button 
            style={styles.modalBtn}
            onClick={onOpenModal}
          >
            Оставить заявку
          </button>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #3a368c, 0%, #7671d7, 50%, #d0c9ef 100%)',
    padding: '15px 30px',
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  nav: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalBtn: {
    marginLeft: 'auto',
    background: '#ffffff',
    color: '#4f46e5',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 18px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.15s',
  },
  link: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '10px 15px',
    transition: 'opacity 0.2s',
  },
  activeLink: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '10px 15px',
    borderBottom: '2px solid white',
  }
};

export default Header;