import {Component, OnInit} from '@angular/core';
import {MovieDetail} from "../model/movie-detail";
import {MovieService} from "../services/movie.service";
import {ResultSetProjection} from "../model/result-set-projection";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html'
})
export class ListMoviesComponent implements OnInit {

  resultSet!: ResultSetProjection;
  listMovies!: MovieDetail[];
  searchBy: any = {year:null, winner: null};
  currentPage: any = 0;
  constructor(private movieSearchService:MovieService) {
  }

  ngOnInit(): void {
        this.search();
    }

  search(): void {
    this.movieSearchService.search(this.currentPage, 15, this.searchBy.winner, this.searchBy.year).subscribe(
      res => {
        this.resultSet = res;
        this.listMovies = this.resultSet.content;
      }, error => {
      });
  }

  searchFilter() {
    this.currentPage = 0;
    this.search();
  }
}
