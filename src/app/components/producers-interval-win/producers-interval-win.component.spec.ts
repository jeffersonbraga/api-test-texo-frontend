import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersIntervalWinComponent } from './producers-interval-win.component';

describe('ProducersIntervalWinComponent', () => {
  let component: ProducersIntervalWinComponent;
  let fixture: ComponentFixture<ProducersIntervalWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersIntervalWinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducersIntervalWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
