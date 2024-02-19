import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ResultSetProjection} from "../../model/result-set-projection";

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html'
})
export class PageNavigatorComponent implements OnChanges {

  @Input("resultSetProjection")
  resultSetProjection!: ResultSetProjection;

  @Output()
  updateSearchEvent: EventEmitter<any> = new EventEmitter();

  listPagesAvaliable!:number[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log("this.resultSetProjection.totalPages:", this.resultSetProjection?.totalPages)
    console.log("ngOnChanges")
    this.updateNavigatorBar();
  }

  private updateNavigatorBar() {
    if (this.resultSetProjection) {
      this.listPagesAvaliable = [];
      if (this.resultSetProjection?.totalPages < 5) {
        for(let i = 1; i <= this.resultSetProjection?.totalPages; i++){
          this.listPagesAvaliable.push(i);
        }
      } else {

        let countPagesFrom = this.resultSetProjection.pageable.pageNumber + 1;
        let countPagesTo = countPagesFrom + 4;

        if (countPagesTo > this.resultSetProjection.totalPages) {
          countPagesTo = this.resultSetProjection.totalPages;
          countPagesFrom = this.resultSetProjection.totalPages - 4;
        }

        for(let i = countPagesFrom; i <= countPagesTo; i++){
          this.listPagesAvaliable.push(i);
        }
      }
    }
  }

  updateSearch(idx: number) {

    if(idx > this.resultSetProjection.totalPages) {
      idx = this.resultSetProjection.totalPages;
    }

    if(idx < 1) {
      idx = 1;
    }

    this.updateSearchEvent.emit(idx-1);
  }
}
