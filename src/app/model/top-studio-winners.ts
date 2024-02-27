import {StudioWinners} from "./studio-winners";

export class TopStudioWinners {

  studios!: StudioWinners[];
  getTopThreeWinners() {
    let top3 = this.studios;
    top3.length = 3;
    return top3;
  }
}
