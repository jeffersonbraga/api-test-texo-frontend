import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TopStudioWinnersComponent } from './top-studio-winners.component';
import {DashboardMultipleWinnersService} from "../../services/dashboard-multiple-winners.service";
import {HttpClientModule} from "@angular/common/http";
import {StudioWinners} from "../../model/studio-winners";
import {StudioService} from "../../services/studio.service";
import {of} from "rxjs";

describe('TopStudioWinnersComponent', () => {
  let component: TopStudioWinnersComponent;
  let fixture: ComponentFixture<TopStudioWinnersComponent>;
  let serviceStub: any;
  let resultExpected = {
    "years": [
      {
        "year": 1986,
        "winnerCount": 2
      },
      {
        "year": 1990,
        "winnerCount": 2
      },
      {
        "year": 2015,
        "winnerCount": 2
      }
    ]
  };

  beforeEach(async () => {

    serviceStub = {
      studioWinCount: () => of(resultExpected),
    };

    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [TopStudioWinnersComponent],
      providers: [ {provide: StudioService, useValue: serviceStub} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStudioWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive array list Movies', fakeAsync(() => {
    fixture.detectChanges();
    tick(2000);
    expect(fixture.debugElement.nativeElement.querySelector('tbody').children.length).toEqual(1);
  }));

});
