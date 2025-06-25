import {Component, inject, input} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Trainee} from '../../Models/Trainee.interface';
import {Router} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-trainee-table',
  imports: [CommonModule, MatTableModule, MatChipsModule, MatIcon],
  templateUrl: './trainee-table.component.html',
  styleUrl: './trainee-table.component.scss'
})
export class TraineeTableComponent {
  router = inject(Router);
   trainees = input<Trainee[]>([]);

  openDetails(id: number) {
    this.router.navigate(['/trainees', id]);
  }
}
