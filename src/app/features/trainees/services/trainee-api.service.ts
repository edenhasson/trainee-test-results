import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Trainee} from '../Models/Trainee.interface';

@Injectable({ providedIn: 'root' })
export class TraineeApiService {
  http = inject(HttpClient);

  getTrainees(): Observable<Trainee[]> {
    return this.http.get<Trainee[]>('/api/trainees');
  }

  getTraineeById(id: number) {
    return this.http.get<Trainee>(`/api/trainees/${id}`);
  }
}
