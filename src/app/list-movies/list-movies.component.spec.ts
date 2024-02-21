import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ListMoviesComponent } from './list-movies.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "../services/movie.service";
import {PageNavigatorComponent} from "../components/page-navigator/page-navigator.component";
import {FormsModule} from "@angular/forms";

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;
  let resultExpected = {
    "content": [
      {
        "id": 116,
        "year": 2002,
        "title": "Swept Away",
        "studios": [
          "Screen Gems"
        ],
        "producers": [
          "Matthew Vaughn"
        ],
        "winner": true
      }
    ],
    "pageable": {
      "sort": {
        "unsorted": true,
        "sorted": false,
        "empty": true
      },
      "offset": 0,
      "pageSize": 999,
      "pageNumber": 0,
      "paged": true,
      "unpaged": false
    },
    "totalPages": 1,
    "totalElements": 1,
    "last": true,
    "size": 15,
    "number": 0,
    "sort": {
      "unsorted": true,
      "sorted": false,
      "empty": true
    },
    "first": true,
    "numberOfElements": 1,
    "empty": false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, FormsModule ],
      declarations: [ ListMoviesComponent, PageNavigatorComponent ],
      providers: [ MovieService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  function setValuesToInputs(filterInput: any, filterSelect: any) {

    filterInput.value = 2002;
    filterSelect.value = "yes";
    filterInput.dispatchEvent(new Event('input'));
    filterSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    return fixture.whenStable();
  }

  it('should apply filter', () => {
    let filterInput = fixture.debugElement.nativeElement.querySelector('input');
    let filterSelect = fixture.debugElement.nativeElement.querySelector('select');
    setValuesToInputs(filterInput, filterSelect);
    expect(component.searchBy.year).toEqual(2002);
    expect(component.searchBy.winner).toEqual('yes');
  });

  it('should reflect filter from inputs', fakeAsync(() => {

    let filterInput = fixture.debugElement.nativeElement.querySelector('input');
    let filterSelect = fixture.debugElement.nativeElement.querySelector('select');
    component.searchBy.year = 2018;
    component.searchBy.winner = "yes";
    fixture.detectChanges();
    tick();
    expect(filterInput.value).toEqual('2018');
    expect(filterSelect.value).toEqual('yes');
  }));

  it('should have expected result', (done:DoneFn) => {
    let filterInput = fixture.debugElement.nativeElement.querySelector('input');
    let filterSelect = fixture.debugElement.nativeElement.querySelector('select');
    setValuesToInputs(filterInput, filterSelect);
    component.search();
    fixture.detectChanges();
    component.resultSet$.subscribe(res => {
      expect(res.content[0]).toEqual(resultExpected.content[0]);
      done();
    });
  });

  it('should have fifteen rows at table', (done:DoneFn) => {
    component.searchBy.year = 2002;
    component.searchBy.winner = true;
    component.search();
    component.resultSet$.subscribe(res => {
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('tbody').children.length).toEqual(15);
      done();
    });
  });
});
