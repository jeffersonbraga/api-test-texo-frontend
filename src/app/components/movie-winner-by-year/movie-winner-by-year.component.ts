import { Component } from '@angular/core';
import {MovieDetail} from "../../model/movie-detail";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-winner-by-year',
  templateUrl: './movie-winner-by-year.component.html'
})
export class MovieWinnerByYearComponent {

  resultSet!: MovieDetail[];
  searchBy: any = {year:null};
  constructor(private movieSearchService:MovieService) {
  }

  search(): void {
    this.movieSearchService.winnerByYear(this.searchBy.year).subscribe(
      res => {
        this.resultSet = res;
      }, error => {
    });
  }
}
