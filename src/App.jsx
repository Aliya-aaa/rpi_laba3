import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import ApplicationModal from './components/ApplicationModal';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Обычная навигация между страницами
  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Скроллим вверх при переходе на другую страницу
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFindTeacher = () => {
    setCurrentPage('teachers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTeacherClick = (teacher) => {
    console.log('Выбран преподаватель:', teacher.name);
    // Здесь можно добавить переход на страницу преподавателя
  };

  // Функция для скролла к секциям на главной
  const goToSection = (sectionId) => {
    setCurrentPage('home'); // ИСПРАВЛЕНО: было setPage

    // ждём, пока главная отрендерится, и скроллим к секции
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="App">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSectionClick={goToSection}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {currentPage === 'home' && <HomePage onFindTeacher={handleFindTeacher} />}
      {currentPage === 'teachers' && (
        <TeachersPage
          onTeacherClick={handleTeacherClick}
          onOpenModal={() => setIsModalOpen(true)}
        />
      )}

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;