import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'appPeso';
  page = 'Goals';

  actualWeight = new FormControl(0);
  goalWeight = new FormControl(0);
  weeklyDiff = new FormControl(0);
  initialDate = new FormControl('');
  finalDate = new FormControl('');

  ngOnInit() {
    this.actualWeight.valueChanges.subscribe(() => {
      this.updateWeeklyDiff();
    });
    this.goalWeight.valueChanges.subscribe(() => {
      this.updateWeeklyDiff();
    });
    this.initialDate.valueChanges.subscribe(() => {
      this.autoCompleteEndDate();
    });
    this.weeklyDiff.disable();
  }

  updateWeeklyDiff() {
    const actual = this.actualWeight.value || 0;
    const goal = this.goalWeight.value || 0;
    this.weeklyDiff.setValue(this.calculateWeeklyDiff(actual, goal));
  }

  calculateWeeklyDiff(actualWeight: number, goalWeight: number): number {
    if (actualWeight == goalWeight) {
      return 0;
    } else if (actualWeight > goalWeight) {
      return ((actualWeight * 0.7) / 100) * -1;
    } else {
      return (actualWeight * 0.7) / 100;
    }
  }

  autoCompleteEndDate() {
    const actualWeight = this.actualWeight.value;
    const goalWeight = this.goalWeight.value;
    const initialDate = this.initialDate.value;

    if (
      actualWeight &&
      goalWeight &&
      initialDate &&
      this.isValidDate(initialDate)
    ) {
      const endDate = this.calculateEndDate(
        actualWeight,
        goalWeight,
        new Date(initialDate),
      );
      this.finalDate.setValue(endDate.toISOString().substring(0, 10));
    }
  }

  isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  calculateEndDate(
    actualWeight: number,
    goalWeight: number,
    startDate: Date,
  ): Date {
    let diff = this.calculateWeeklyDiff(actualWeight, goalWeight);
    let weeks = Math.ceil(Math.abs(goalWeight - actualWeight) / Math.abs(diff));
    const resultDate = new Date(startDate.getTime());
    resultDate.setDate(resultDate.getDate() + weeks * 7);
    return resultDate;
  }
}
