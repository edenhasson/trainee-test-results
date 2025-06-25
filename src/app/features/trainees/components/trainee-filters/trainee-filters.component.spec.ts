import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeFiltersComponent } from './trainee-filters.component';

describe('TraineeFiltersComponent', () => {
  let component: TraineeFiltersComponent;
  let fixture: ComponentFixture<TraineeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraineeFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
