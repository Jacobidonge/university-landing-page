import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const background = document.querySelector('.hero-section::before') as HTMLElement;

    const hero = document.querySelector('.hero-section') as HTMLElement;
    if (hero) {
      const offset = scrollY * 0.3;
      hero.style.setProperty('--parallax-offset', `${offset}px`);
    }

    this.isScrolled = scrollY > 50;
  }

  currentBackground: string = 'assets_univ/images/default.jpg'; // Image par défaut

  options = [
    {
      name: 'Option Electro-Énergétique',
      image: 'assets_univ/images/electricite_2.jpg'
    },
    {
      name: 'Option Électronique',
      image: 'assets_univ/images/electronique_2.jpg'
    },
    {
      name: 'Option Informatique',
      image: 'assets_univ/images/informatique_2.jpg'
    }
  ];

  changeBackground(image: string) {
    this.currentBackground = image;
  }

  resetBackground() {
    this.currentBackground = 'assets_univ/images/default.jpg';
  }
}
