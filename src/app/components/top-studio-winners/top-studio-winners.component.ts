import {Component, OnInit} from '@angular/core';
import {StudioWinners} from "../../model/studio-winners";
import {StudioService} from "../../services/studio.service";
import {Observable, shareReplay, tap} from "rxjs";
import {TopStudioWinners} from "../../model/top-studio-winners";

@Component({
  selector: 'app-top-studio-winners',
  templateUrl: './top-studio-winners.component.html'
})
export class TopStudioWinnersComponent implements OnInit {

  resultSet$ = new Observable<TopStudioWinners>();
  constructor(private studiosWinService:StudioService) {
  }
  ngOnInit(): void {
    this.resultSet$ = this.studiosWinService.studioWinCount().pipe(
      shareReplay(),
      tap((res) => {
        res.studios.length = 3;
        res.studios;
    }));
  }
}
