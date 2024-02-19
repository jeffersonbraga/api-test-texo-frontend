import {Component, OnInit} from '@angular/core';
import {IntervalWinners} from "../../model/interval-winners";
import {ProducerService} from "../../services/producer.service";

@Component({
  selector: 'app-producers-interval-win',
  templateUrl: './producers-interval-win.component.html'
})
export class ProducersIntervalWinComponent implements OnInit {

  resultSetMax!: IntervalWinners[];
  resultSetMin!: IntervalWinners[];
  constructor(private intervalBetweenWinService:ProducerService) {
  }
  ngOnInit(): void {
    this.intervalBetweenWinService.maxminInterval().subscribe(
      res => {
        this.resultSetMax = res["max"];
        this.resultSetMin = res["min"];
      }, error => {

      });
  }
}
