import {Component, OnInit} from '@angular/core';
import {Winners, YearMultipleWinners} from "../../model/year-multiple-winners";
import {DashboardMultipleWinnersService} from "../../services/dashboard-multiple-winners.service";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-multiple-winners',
  templateUrl: './multiple-winners.component.html'
})
export class MultipleWinnersComponent implements OnInit {

  resultSet$ = new Observable<Winners>();
  constructor(private dashboard_multiple_winners:DashboardMultipleWinnersService) {
  }
  ngOnInit(): void {
    this.resultSet$ = this.dashboard_multiple_winners.getMultipleYearWinner().pipe(
      tap((res) => res.years)
    );
  }
}
