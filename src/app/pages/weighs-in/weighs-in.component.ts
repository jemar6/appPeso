import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Weight {
  date: string;
  value: number;
}

@Component({
  selector: 'app-weighs',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './weighs-in.component.html',
  styleUrl: './weighs-in.component.css',
})
export class WeighsInComponent {
  weights: Weight[] = [
    { date: '2023-01-01', value: 70 },
    { date: '2023-01-02', value: 71 },
    { date: '2023-01-03', value: 69 },
  ];

  selectInput(event: FocusEvent) {
    (event.target as HTMLInputElement).select();
  }
}
