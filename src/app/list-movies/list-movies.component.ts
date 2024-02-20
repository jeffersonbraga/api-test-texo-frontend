import {Component, OnInit} from '@angular/core';
import {MovieDetail} from "../model/movie-detail";
import {MovieService} from "../services/movie.service";
import {ResultSetProjection} from "../model/result-set-projection";
import {Observable, shareReplay, tap} from "rxjs";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html'
})
export class ListMoviesComponent implements OnInit {

  resultSet$ = new Observable<ResultSetProjection>();
  emptyListMovies: MovieDetail[] = [new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail(), new MovieDetail()];
  searchBy: any = {year: null, winner: null};
  currentPage: any = 0;

  constructor(private movieSearchService: MovieService) {
  }

  fillTable(content: MovieDetail[]) {
    if (content.length < 15) {
      content.length = 15;
    }
  }

  ngOnInit(): void {
    this.resultSet$.subscribe(
      res => this.fillTable(res.content)
    );
    this.search();
  }

  search(): void {
    this.resultSet$ = this.movieSearchService.search(this.currentPage, 15, this.searchBy.winner, this.searchBy.year)
      .pipe(
        shareReplay(),
        tap(res => {
          this.fillTable(res.content);
        })
      );
  }

  searchFilter() {
    this.currentPage = 0;
    this.search();
  }
}
