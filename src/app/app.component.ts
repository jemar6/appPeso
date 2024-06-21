import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  page = 'Goals';
  isCollapsed = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updatePageTitle(event.url);
      }
    });
  }

  navigate(): void {
    const currentUrl = this.router.url;
    this.router.navigate([currentUrl.includes('goals') ? '/weighs' : '/goals']);
  }

  private updatePageTitle(url: string): void {
    this.page = url.includes('goals') ? 'Goals' : 'Weighs';
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
