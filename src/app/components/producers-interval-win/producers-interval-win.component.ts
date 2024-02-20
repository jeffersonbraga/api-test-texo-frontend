import {Component, OnInit} from '@angular/core';
import {IntervalWinners} from "../../model/interval-winners";
import {ProducerService} from "../../services/producer.service";
import {map, Observable, shareReplay, tap} from "rxjs";
import {IntervalMaxMin} from "../../model/interval-max-min";

@Component({
  selector: 'app-producers-interval-win',
  templateUrl: './producers-interval-win.component.html'
})
export class ProducersIntervalWinComponent implements OnInit {

  resultSet$ = new Observable<IntervalMaxMin>();

  constructor(private intervalBetweenWinService:ProducerService) {
  }
  ngOnInit(): void {
    this.resultSet$ = this.intervalBetweenWinService.maxminInterval().pipe(shareReplay());
  }
}
