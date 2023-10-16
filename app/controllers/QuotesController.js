import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawActiveQuote() {
  setHTML('quote', `<p class="fs-2 text-white text-center quote ">${AppState.activeQuote.content}</p>
  <p class="fs-4 text-white text-center author">${AppState.activeQuote.author}</p>`)
}


export class QuotesController {
  constructor() {
    this.getQuotes()
    AppState.on('activeQuote', _drawActiveQuote)
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}