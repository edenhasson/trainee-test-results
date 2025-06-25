import {Component, Output, EventEmitter, inject, Input, OnInit, input, output} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import {Filter} from '../../Models/Filter.interface';

@Component({
  standalone: true,
  selector: 'app-trainee-filters',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './trainee-filters.component.html',
  styleUrl: './trainee-filters.component.scss'
})
export class TraineeFiltersComponent implements OnInit {
  fb = inject(FormBuilder);
  initialFilters = input<Filter>({});
  filterChange = output<Filter>();
  form!: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.initialFilters().name || ''],
      passed: [this.initialFilters().passed ?? null]
    });

    this.form.valueChanges.subscribe(values => {
      this.filterChange.emit({
        name: values.name?.trim() || undefined,
        passed: values.passed
      });
    });
  }
}
