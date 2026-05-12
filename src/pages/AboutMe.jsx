function AboutMe() {
  return (
    <section className="page">
      <h1>Про мене</h1>

      <div className="card profile-card">
        <div className="avatar">📊</div>

        <div>
          <h2>Мельничук Анастасія</h2>
          <p>
            Я Дата Аналітик, який працює з даними, аналітикою та сучасними інструментами для обробки інформації.
          </p>
        </div>
      </div>

      <div className="card">
        <h2>Навички</h2>
        <div className="projects">
          <div className="project-item">
            <h3>Дата Аналітика</h3>
            <p>Аналіз та візуалізація даних</p>
          </div>

          <div className="project-item">
            <h3>Python</h3>
            <p>Автоматизація та робота з даними</p>
          </div>

          <div className="project-item">
            <h3>Power BI / SQL</h3>
            <p>Створення звітів та робота з базами даних</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Контакти</h2>
        <p>+380639797093</p>
      </div>
    </section>
  )
}

export default AboutMe
