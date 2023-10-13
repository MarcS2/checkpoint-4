import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class WeatherService {
  get calculateFahrenheit() {
    let F = 0
    const tempK = AppState.weather.main.temp
    F = ((tempK - 273.15) * 1.8) + 32
    return F
  }

  get calculateCelsius() {
    let C = 0
    const tempK = AppState.weather.main.temp
    C = tempK - 273.15
    return C
  }
  async getWeather() {
    const res = await api.get('api/weather')
    AppState.weather = res.data
    console.log('[AppState] getWeather() weather in AppState', AppState.weather);
  }

}

export const weatherService = new WeatherService()