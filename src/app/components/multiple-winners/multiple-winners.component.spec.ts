import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleWinnersComponent } from './multiple-winners.component';
import {HttpClientModule} from "@angular/common/http";
import {DashboardMultipleWinnersService} from "../../services/dashboard-multiple-winners.service";

describe('MultipleWinnersComponent', () => {
  let component: MultipleWinnersComponent;
  let fixture: ComponentFixture<MultipleWinnersComponent>;
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
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MultipleWinnersComponent],
      providers: [ DashboardMultipleWinnersService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive array list year with multiple winners', (done:DoneFn) => {

    component.resultSet$.subscribe(res => {
      expect(res).toEqual(resultExpected);
      done();
    });
  });

  it('should have three row at table', (done:DoneFn) => {
    component.resultSet$.subscribe(res => {
      expect(res).toEqual(resultExpected);
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('tbody').children.length).toEqual(3);
      done();
    });
  });
});
