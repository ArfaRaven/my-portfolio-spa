function MyFuture() {
  return (
    <section className="page">
      <h1>Мій розвиток</h1>

      <div className="card">
        <h2>3 кроки в майбутнє</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span>1</span>
            <p>Навчитися створювати 2D-персонажів, локації</p>
          </div>

          <div className="timeline-item">
            <span>2</span>
            <p>Продумати цікавий сюжет, персонажів, атмосферу гри та основні події</p>
          </div>

          <div className="timeline-item">
            <span>3</span>
            <p>Зробити дисципліну та батрачить без зупину</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Мотиваційна фраза</h2>
        <blockquote>
          “Бідний тато, багатий тато, дай грошей на фьючі”
        </blockquote>
      </div>

      <div className="card">
        <h2>Робота мрії</h2>
        <p>
          Розробник ігор, який живе з родиною в будинку в горах 
          та отримує задоволення від позитивних відгуків гравців у Steam
        </p>
      </div>
    </section>
  )
}

export default MyFuture