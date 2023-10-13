import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _setBgImg() {
  document.body.style.backgroundImage = `url('${AppState.activeBgImg.largeImgUrl}')`;
  console.log(AppState.activeBgImg.largeImgUrl);
  setHTML('imgAuthor', `<p class="fs-2 text-white">Image by: ${AppState.activeBgImg.author}</p>`)
}

export class ImagesController {
  constructor() {
    this.getNewImg()
  }


  async getNewImg() {
    try {
      await imagesService.getNewImg()
      _setBgImg()

    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}