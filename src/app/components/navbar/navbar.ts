import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);
  private scroller = inject(ViewportScroller);

  isOpen = signal(false);

  scrollToSection(id: string) {
    this.router.navigate(['home']).then(() => {
      setTimeout(() => this.scroller.scrollToAnchor(id), 100);
      this.isOpen.set(false);
    });
  }

  navigateToRoute(name: string) {
    this.router.navigate([name]);
    this.isOpen.set(false);
  }
}
