import {Component, OnInit} from '@angular/core';
import {YearMultipleWinners} from "../../model/year-multiple-winners";
import {DashboardMultipleWinnersService} from "../../services/dashboard-multiple-winners.service";

@Component({
  selector: 'app-multiple-winners',
  templateUrl: './multiple-winners.component.html'
})
export class MultipleWinnersComponent implements OnInit {

  resultSet!: YearMultipleWinners[];
  constructor(private dashboard_multiple_winners:DashboardMultipleWinnersService) {
  }
  ngOnInit(): void {
    this.dashboard_multiple_winners.getMultipleYearWinner().subscribe(
      res => {
        this.resultSet = res["years"];
      }, error => {

      });
  }
}
