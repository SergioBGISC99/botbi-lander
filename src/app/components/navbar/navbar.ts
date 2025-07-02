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
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = 500;
          let y =
            element.getBoundingClientRect().top + window.pageYOffset - yOffset;

          if (y < 0) y = 0;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
      this.isOpen.set(false);
    });
  }

  navigateToRoute(name: string) {
    this.router.navigate([name]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    this.isOpen.set(false);
  }
}
