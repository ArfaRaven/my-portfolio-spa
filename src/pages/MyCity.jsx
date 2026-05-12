import { useEffect, useState } from 'react'
import { getWeather } from '../api/weatherApi'

function MyCity() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await getWeather('Kyiv')
        setWeather(data)
      } catch (err) {
        setError('Не вдалося завантажити дані про погоду')
      } finally {
        setLoading(false)
      }
    }

    loadWeather()
  }, [])

  return (
    <section className="page">
      <h1>Моє місто</h1>

      <div className="card city-card">
        <div>
          <h2>Київ</h2>
          <p>
            Київ — сучасне місто, яке поєднує технології, культуру та розвиток.
          </p>

          <p>
            Саме тут я навчаюсь, працюю та розвиваюсь у сфері Data Analytics.
          </p>
        </div>
      </div>

      <div className="card">
        <h2>Поточна погода</h2>

        {loading && <p>Завантаження погоди...</p>}

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather">
            <p><strong>Місто:</strong> {weather.city}</p>
            <p><strong>Температура:</strong> {weather.temperature}°C</p>
            <p><strong>Опис:</strong> {weather.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default MyCity
