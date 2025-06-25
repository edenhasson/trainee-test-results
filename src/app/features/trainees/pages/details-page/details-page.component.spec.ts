import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPageComponent } from './details-page.component';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';

describe('DetailsPageComponent', () => {
  let component: DetailsPageComponent;
  let fixture: ComponentFixture<DetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPageComponent],
      providers: [
        importProvidersFrom(HttpClientTestingModule),
        provideRouter([])
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
