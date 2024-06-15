import { Routes } from '@angular/router';
import { PesadasComponent } from './pages/pesadas/pesadas.component';
import { ObjetivosComponent } from './pages/objetivos/objetivos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'pesadas', component: PesadasComponent },
  { path: 'objetivos', component: ObjetivosComponent },
  { path: '', redirectTo: '/pesadas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
