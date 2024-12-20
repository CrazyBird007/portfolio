import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMobileNavbar: boolean = false;

  toggleMobileNavbar() {
    this.showMobileNavbar = true;
  }

  toggleMobileNavbarBack() {
    this.showMobileNavbar = false;
  }

  translate = inject(TranslationService);

  isHeaderHidden = false;
  lastScrollTop = 0;

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScrollTop = document.documentElement.scrollTop;
    if (currentScrollTop > this.lastScrollTop) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
