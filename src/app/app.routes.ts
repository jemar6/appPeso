import { Routes } from '@angular/router';
import { GoalsComponent } from './pages/goals/goals.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WeighsInComponent } from './pages/weighs-in/weighs-in.component';

export const routes: Routes = [
  { path: 'weighs', component: WeighsInComponent },
  { path: 'goals', component: GoalsComponent },
  { path: '', redirectTo: '/goals', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
