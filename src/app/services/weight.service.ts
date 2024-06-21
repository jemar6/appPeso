import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeightService {
  private _actualWeight: number = 0;

  get actualWeight(): number {
    return this._actualWeight;
  }

  set actualWeight(weight: number) {
    this._actualWeight = weight;
  }
}
