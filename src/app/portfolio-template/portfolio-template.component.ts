import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-template',
  templateUrl: './portfolio-template.component.html',
  styleUrls: ['./portfolio-template.component.scss']
})
export class PortfolioTemplateComponent {
  @Input() project: any = {
    img: 'no image',
    name: 'test name',
    code: 'html, css',
    description: 'test description',
    projectlink: 'lin',
    githublink: 'lin'
  }
}
