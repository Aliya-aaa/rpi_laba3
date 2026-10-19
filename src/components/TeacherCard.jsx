import React from 'react';

function TeacherCard({ teacher, onClick }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="teacher-card" onClick={() => onClick(teacher)}>
      <img 
        src={teacher.photo} 
        alt={teacher.name}
        className="teacher-card__image"
        loading="lazy"
      />
      
      <div className="teacher-card__content">
        {teacher.degree && (
          <span className="teacher-card__badge">
            {teacher.degree}
          </span>
        )}
        
        <h3 className="teacher-card__name">{teacher.name}</h3>
        
        <div className="teacher-card__info">
          <span className="teacher-card__meta">
            Стаж: {teacher.experience} лет
          </span>
          <span className="teacher-card__meta">
            {teacher.education}
          </span>
        </div>

        <div className="teacher-card__subjects">
          <div className="teacher-card__subjects-title">
            Преподаваемые дисциплины:
          </div>
          <ul className="teacher-card__subjects-list">
            {teacher.subjects.map((subject, index) => (
              <li key={index} className="teacher-card__subject">
                {subject.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="teacher-card__prices">
          <div className="teacher-card__price-item">
            <span className="teacher-card__price-label">Индивидуально:</span>
            <span className="teacher-card__price-value">
              {formatPrice(teacher.prices.individual)} ₽
            </span>
          </div>
          <div className="teacher-card__price-item">
            <span className="teacher-card__price-label">Пакет (8 занятий):</span>
            <span className="teacher-card__price-value">
              {formatPrice(teacher.prices.package)} ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;