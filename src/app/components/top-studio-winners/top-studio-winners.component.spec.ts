import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStudioWinnersComponent } from './top-studio-winners.component';

describe('TopStudioWinnersComponent', () => {
  let component: TopStudioWinnersComponent;
  let fixture: ComponentFixture<TopStudioWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopStudioWinnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopStudioWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
