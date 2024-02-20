import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ResultSetProjection} from "../../model/result-set-projection";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html'
})
export class PageNavigatorComponent implements OnChanges {

  @Input("resultSetProjection")
  resultSetProjection$! : Observable<ResultSetProjection>;

  resultProjection! : ResultSetProjection;

  @Output()
  updateSearchEvent: EventEmitter<any> = new EventEmitter();

  listPagesAvaliable!:number[];

  totalPages!:number;

  ngOnChanges(changes: SimpleChanges): void {
    this.updateNavigatorBar();
  }

  private updateNavigatorBar() {
    this.resultSetProjection$.subscribe(res => {

      this.listPagesAvaliable = [];
      this.totalPages = res.totalPages;
      this.resultProjection = res;
      if (res.totalPages < 5) {
        for(let i = 1; i <= res.totalPages; i++){
          this.listPagesAvaliable.push(i);
        }
      } else {

        let countPagesFrom = res.pageable.pageNumber + 1;
        let countPagesTo = countPagesFrom + 4;

        if (countPagesTo > res.totalPages) {
          countPagesTo = res.totalPages;
          countPagesFrom = res.totalPages - 4;
        }

        for(let i = countPagesFrom; i <= countPagesTo; i++){
          this.listPagesAvaliable.push(i);
        }
      }
    });
  }

  updateSearch(idx: number) {

    if(idx > this.totalPages) {
      idx = this.totalPages;
    }

    if(idx < 1) {
      idx = 1;
    }

    this.updateSearchEvent.emit(idx-1);
  }
}
