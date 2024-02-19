import {Pageable} from "./pageable";
import {Sort} from "./sort";
import {MovieDetail} from "./movie-detail";

export class ResultSetProjection {

  content!: MovieDetail[];
  pageable!: Pageable;
  totalPages!: number;
  totalElements!: number;
  last!: boolean;
  size!: number;
  number!: number;
  sort!: Sort;
  first!: boolean;
  numberOfElements!: number;
  empty!: boolean;
}
