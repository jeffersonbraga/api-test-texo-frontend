import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {MovieWinnerByYearComponent} from './movie-winner-by-year.component';
import {MovieService} from "../../services/movie.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";
import {DebugElement} from "@angular/core";

describe('MovieWinnerByYearComponent', () => {
  let component: MovieWinnerByYearComponent;
  let fixture: ComponentFixture<MovieWinnerByYearComponent>;
  // let de: DebugElement;
  // let service: MovieService;
  // let spy: jasmine.Spy;
  //let serviceStub: any;
  let resultExpected = [{
    "id": 197,
    "year": 2018,
    "title": "Holmes & Watson",
    "studios": ["Columbia Pictures"],
    "producers": ["Adam McKay", "Clayton Townsend", "Jimmy Miller", "Will Ferrell"],
    "winner": true
  }];

  beforeEach(async () => {

    // serviceStub = {
    //   winnerByYear: () => of(resultExpected),
    // };

    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [MovieWinnerByYearComponent],
      providers: [ MovieService ]
      //providers: [{provide: MovieService, useValue: serviceStub}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovieWinnerByYearComponent);
    component = fixture.componentInstance;
    //de = fixture.debugElement;
    //service = de.injector.get(MovieService);
    //spy = spyOn(service, 'winnerByYear').and.returnValue(of(resultExpected));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set value from object', fakeAsync(() => {

    let txtInput = fixture.debugElement.nativeElement.querySelector('input');
    component.searchBy.year = 2018;
    fixture.detectChanges();
    tick();
    expect(txtInput.value).toEqual('2018');

  }));

  it('should click search button', fakeAsync(() => {
    spyOn(component, 'search');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    fixture.detectChanges();
    expect(component.search).toHaveBeenCalled();

  }));

  it('should receive array list Movies', (done:DoneFn) => {
    component.searchBy.year = 2018;
    component.search();
    fixture.detectChanges();
    component.resultSet$.subscribe(res => {
      expect(res).toEqual(resultExpected);
      done();
    });
  });

  it('should have one row at table', (done:DoneFn) => {
    //spectator.typeInElement('Netanel', 'input');
    component.searchBy.year = 2018;
    component.search();
    fixture.detectChanges();
    component.resultSet$.subscribe(res => {
      expect(res).toEqual(resultExpected);
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('tbody').children.length).toEqual(1);
      done();
    });
  });

  // it('should receive array list Movies', fakeAsync(() => {
  //   component.search();
  //   fixture.detectChanges();
  //   tick();
  //   component.resultSet$.subscribe(res => {
  //     expect(res).toBe(resultExpected)
  //   });
  // }));
});
