import { Component } from '@angular/core';

@Component({
  selector: 'app-dataprotection',
  templateUrl: './dataprotection.component.html',
  styleUrls: ['./dataprotection.component.scss']
})
export class DataprotectionComponent {
  ngOnInit() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200); 
  }
}
