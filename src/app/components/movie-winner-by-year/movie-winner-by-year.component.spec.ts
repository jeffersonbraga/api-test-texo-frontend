import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWinnerByYearComponent } from './movie-winner-by-year.component';
import {of} from "rxjs";
import {MovieService} from "../../services/movie.service";

describe('MovieWinnerByYearComponent', () => {
  let component: MovieWinnerByYearComponent;
  let fixture: ComponentFixture<MovieWinnerByYearComponent>;
  let serviceStub: any;

  beforeEach(async () => {

    serviceStub = {
      winnerByYear: () => of('[{"id": 197, "year": 2018, "title": "Holmes & Watson", "studios": ["Columbia Pictures"], "producers": ["Adam McKay", "Clayton Townsend", "Jimmy Miller", "Will Ferrell"], "winner": true}]'),
    };

    await TestBed.configureTestingModule({
      imports: [MovieWinnerByYearComponent],
      providers: [{provide: MovieService, useValue: serviceStub}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieWinnerByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data', () => {
    component.resultSet$.subscribe(
      res => {

        expect(res).toBeDefined();
        expect(res).toBe([]);
      });
  });
});
