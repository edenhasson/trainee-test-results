import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TraineeApiService } from './trainee-api.service';
import {Trainee} from '../Models/Trainee.interface';

describe('TraineeApiService', () => {
  let service: TraineeApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TraineeApiService],
    });

    service = TestBed.inject(TraineeApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should fetch trainees', done => {
    const mockTrainees: Trainee[] = [
      { id: 1, name: 'Alice', score: 88, passed: true },
      { id: 2, name: 'Bob', score: 65, passed: false },
    ];

    service.getTrainees().subscribe(trainees => {
      expect(trainees.length).toBe(2);
      expect(trainees).toEqual(mockTrainees);
      done();
    });

    const req = httpMock.expectOne('/api/trainees');
    expect(req.request.method).toBe('GET');
    req.flush(mockTrainees);
  });

  test('should return empty array when no trainees exist', done => {
    service.getTrainees().subscribe(trainees => {
      expect(trainees).toEqual([]);
      expect(trainees.length).toBe(0);
      done();
    });

    const req = httpMock.expectOne('/api/trainees');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
