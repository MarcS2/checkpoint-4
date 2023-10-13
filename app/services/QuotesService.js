import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";


class QuotesService {
  async getQuotes() {
    const res = await api.get('api/quotes')
    AppState.activeQuote = res.data

  }

}

export const quotesService = new QuotesService()