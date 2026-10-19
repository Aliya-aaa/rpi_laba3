import React from 'react';
import TeacherCard from '../components/TeacherCard';
import { teachers } from '../data/teachers';

function TeachersPage({ onTeacherClick }) {
  return (
    <div>
      <div className="container">
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: '700',
          textAlign: 'center',
          margin: '40px 0 20px',
          color: '#1f2937'
        }}>
          Наши лекторы
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '18px',
          marginBottom: '40px'
        }}>
          10 экспертов с научными степенями и практическим опытом
        </p>
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