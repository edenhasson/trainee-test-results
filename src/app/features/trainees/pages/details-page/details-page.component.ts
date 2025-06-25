import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TraineeApiService } from '../../services/trainee-api.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {Trainee} from '../../Models/Trainee.interface';
import {MatChip} from '@angular/material/chips';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChip],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent {
  private route = inject(ActivatedRoute);
  private api = inject(TraineeApiService);
  private router = inject(Router);
  trainee = signal<Trainee | null>(null);


  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getTraineeById(id).subscribe(t => (this.trainee.set(t)));
  }

  goBack() {
    this.router.navigate(['/trainees']);
  }
}
