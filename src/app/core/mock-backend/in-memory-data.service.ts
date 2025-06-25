import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trainees = [
      { id: 1, name: 'Alice', score: 88, passed: true },
      { id: 2, name: 'Bob', score: 65, passed: false },
      { id: 3, name: 'Charlie', score: 92, passed: true },
      { id: 4, name: 'Dana', score: 74, passed: true },
      { id: 5, name: 'Eve', score: 49, passed: false }
    ];
    return { trainees };
  }
}
