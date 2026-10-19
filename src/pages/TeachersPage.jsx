import React from 'react';
import TeacherCard from '../components/TeacherCard';
import { teachers } from '../data/teachers';

function TeachersPage({ onTeacherClick, onOpenModal }) {
  return (
    <div>
      <div className="container page-head">
        <h1>Наши лекторы</h1>
        <p>
          10 экспертов с научными степенями и практическим опытом
        </p>
        {onOpenModal && (
          <button className="page-cta" onClick={onOpenModal}>
            Оставить заявку
          </button>
        )}
      </div>
      
      <div className="teachers-grid">
        {teachers.map(teacher => (
          <TeacherCard 
            key={teacher.id} 
            teacher={teacher} 
            onClick={onTeacherClick}
          />
        ))}
      </div>
    </div>
  );
}

export default TeachersPage;