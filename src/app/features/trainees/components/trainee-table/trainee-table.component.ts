import {Component, input, Input} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Trainee} from '../../Models/Trainee.interface';

@Component({
  standalone: true,
  selector: 'app-trainee-table',
  imports: [CommonModule, MatTableModule, MatChipsModule, MatIcon],
  templateUrl: './trainee-table.component.html',
  styleUrl: './trainee-table.component.scss'
})
export class TraineeTableComponent {
   trainees = input<Trainee[]>([]);
}
