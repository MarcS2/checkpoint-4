import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";

export class QuotesController {
  constructor() {
    this.getQuotes()
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