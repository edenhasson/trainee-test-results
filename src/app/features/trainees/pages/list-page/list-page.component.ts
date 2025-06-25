import {Component, signal, computed, effect, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeApiService } from '../../services/trainee-api.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import {TraineeFiltersComponent} from '../../components/trainee-filters/trainee-filters.component';
import {TraineeTableComponent} from '../../components/trainee-table/trainee-table.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {Filter} from '../../Models/Filter.interface';
import {Trainee} from '../../Models/Trainee.interface';
import {MatCard} from '@angular/material/card';

const STORAGE_KEY = 'traineeFilters';

@Component({
  standalone: true,
  selector: 'app-list-page',
  imports: [
    CommonModule,
    TraineeFiltersComponent,
    TraineeTableComponent,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCard
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
  api = inject(TraineeApiService);


  private allTrainees = signal<Trainee[]>([]);
  filters = signal<Filter>(this.loadSavedFilters());
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  // readonly hasNoResults = computed(() => !this.loading() && this.filtered().length === 0);
  readonly filtered = computed(() => {
    const f = this.filters();
    return this.allTrainees().filter(t => {
      const matchName = !f.name || t.name.toLowerCase().includes(f.name.toLowerCase());
      const matchPassed = f.passed === null || f.passed === undefined || t.passed === f.passed;
      return matchName && matchPassed;
    });
  });

  constructor() {
    this.api.getTrainees().subscribe({
      next: data => {
        this.allTrainees.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load trainee data.');
        this.loading.set(false);
      }
    });

    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.filters()));
    });
  }

  onFilterChange(f: Filter) {
    this.filters.set(f);
  }

  private loadSavedFilters(): Filter {
    const raw = localStorage.getItem(STORAGE_KEY);
    try {
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }
}
