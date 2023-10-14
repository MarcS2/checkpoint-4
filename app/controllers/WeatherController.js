import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


let choice = true


function _drawFahrenheit() {
  if (choice) {
    setHTML('active-temp', `<p class="d-inline mb-0" type="button" onclick="app.WeatherController.TempPicker()"><span>${weatherService.calculateFahrenheit}</span><i class="mdi mdi-temperature-fahrenheit"></i></p>`)
  } else {
    _drawCelsius()
  }
}

function _drawCelsius() {
  if (!choice) {
    setHTML('active-temp', `<p class="d-inline mb-0" type="button" onclick="app.WeatherController.TempPicker()"><span>${weatherService.calculateCelsius}</span><i class="mdi mdi-temperature-celsius"></i></p>`)
  } else {
    _drawFahrenheit()
  }
}

export class WeatherController {
  constructor() {
    this.getWeather()

  }

  TempPicker() {
    if (choice) {
      choice = false
      _drawFahrenheit()
      console.log(choice);
      return

    } else if (!choice) {
      choice = true
      _drawCelsius()
      console.log(choice);
    }
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
      _drawFahrenheit()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}