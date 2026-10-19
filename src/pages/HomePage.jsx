import React from 'react';
import HeroSection from '../components/HeroSection';

function HomePage({ onFindTeacher }) {
  const partners = [
    {
      name: "ICL",
      url: "https://icl.ru",
      description: "ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов, решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС)."
    },
    {
      name: "TATNEFT",
      url: "https://www.tatneft.ru",
      description: "«Татнефть» - одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур."
    }
  ];

  return (
    <div>
      <HeroSection onFindTeacher={onFindTeacher} />
      
      <section id="about" style={{
  padding: '60px 20px',
  background: '#f9fafb'
}}>
        <div className="container">
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#1f2937'
          }}>
            О нашей платформе
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '900px',
            margin: '0 auto 40px',
            textAlign: 'center',
            color: '#4b5563'
          }}>
            Наша учебная платформа соединяет компании, образовательные учреждения и НКО 
            с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, 
            бронирования и организации лекций, помогая находить экспертов, которые не просто 
            делятся знаниями, но и вдохновляют аудиторию.
          </p>
        </div>
      </section>

     <section id="partners" className="partners-section">
        <div className="container">
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#1f2937'
          }}>
            Наши партнёры
          </h2>
          
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <a 
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card"
              >
                <h3 className="partner-card__name">{partner.name}</h3>
                <p className="partner-card__description">
                  {partner.description}
                </p>
                <span className="partner-card__link">
                  Перейти на сайт
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;