import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  mobileMenuOpen = false;
   /** Toggle do menu mobile */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  /** Fecha menu ao clicar em um link */
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
