import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";


let choice = true


function _drawFahrenheit() {

}

export class WeatherController {
  constructor() {
    this.getWeather()
  }

  TempPicker() {
    if (choice) {
      // _drawFahrenheit()
      choice = false
      console.log(choice);
      return

    } else if (!choice) {
      // _drawCelsius()
      choice = true
      console.log(choice);
    }
  }

  async getWeather() {
    try {
      await weatherService.getWeather()

    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}