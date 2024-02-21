import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersIntervalWinComponent } from './producers-interval-win.component';
import {HttpClientModule} from "@angular/common/http";
import {ProducerService} from "../../services/producer.service";

describe('ProducersIntervalWinComponent', () => {
  let component: ProducersIntervalWinComponent;
  let fixture: ComponentFixture<ProducersIntervalWinComponent>;
  let resultExpected = {
    "min": [
      {
        "producer": "Joel Silver",
        "interval": 1,
        "previousWin": 1990,
        "followingWin": 1991
      }
    ],
    "max": [
      {
        "producer": "Matthew Vaughn",
        "interval": 13,
        "previousWin": 2002,
        "followingWin": 2015
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ProducersIntervalWinComponent],
      providers: [ ProducerService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersIntervalWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive array intervals', (done:DoneFn) => {
    component.resultSet$.subscribe(res => {
      expect(res).toEqual(resultExpected);
      done();
    });
  });

  it('should have one row at table', (done:DoneFn) => {
    component.resultSet$.subscribe(res => {
      expect(res).toEqual(resultExpected);
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('tbody').children.length).toEqual(1);
      done();
    });
  });

});
