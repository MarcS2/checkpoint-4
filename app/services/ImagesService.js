import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class ImagesService {
  async getNewImg() {
    const res = await api.get('api/images')
    AppState.activeBgImg = res.data
    console.log('[AppState] active Img', AppState.activeBgImg);

  }

}

export const imagesService = new ImagesService()