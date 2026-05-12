export async function getWeather(city = 'Kyiv') {
  const url = `https://wttr.in/${city}?format=j1`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Помилка під час отримання погоди')
  }

  const data = await response.json()

  return {
    city: data.nearest_area[0].areaName[0].value,
    country: data.nearest_area[0].country[0].value,
    temperature: data.current_condition[0].temp_C,
    description: data.current_condition[0].weatherDesc[0].value,
    latitude: data.nearest_area[0].latitude,
    longitude: data.nearest_area[0].longitude,
  }
}