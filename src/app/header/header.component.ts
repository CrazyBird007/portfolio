import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
}
