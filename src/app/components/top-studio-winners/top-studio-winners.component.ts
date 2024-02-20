import {Component, OnInit} from '@angular/core';
import {StudioWinners} from "../../model/studio-winners";
import {StudioService} from "../../services/studio.service";

@Component({
  selector: 'app-top-studio-winners',
  templateUrl: './top-studio-winners.component.html'
})
export class TopStudioWinnersComponent implements OnInit {

  resultSet!: StudioWinners[];
  constructor(private studiosWinService:StudioService) {
  }
  ngOnInit(): void {
    this.studiosWinService.studioWinCount().subscribe(
res => {
        res["studios"].length = 3
        this.resultSet = res["studios"];
      });
  }
}
