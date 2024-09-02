import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  ngOnInit() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200); 
  }
}
