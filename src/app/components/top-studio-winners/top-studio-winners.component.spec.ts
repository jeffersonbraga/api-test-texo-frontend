import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientModule} from "@angular/common/http";
import {TopStudioWinnersComponent} from "./top-studio-winners.component";
import {StudioService} from "../../services/studio.service";

describe('TopStudioWinnersComponent', () => {
  let component: TopStudioWinnersComponent;
  let fixture: ComponentFixture<TopStudioWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TopStudioWinnersComponent],
      providers: [ StudioService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStudioWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have listed top 3 winners', (done:DoneFn) => {
    component.resultSet$.subscribe(res => {
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('tbody').children.length).toEqual(3);
      done();
    });
  });
});
