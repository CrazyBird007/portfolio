import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-part',
  templateUrl: './portfolio-part.component.html',
  styleUrls: ['./portfolio-part.component.scss']
})
export class PortfolioPartComponent {
  projects = [
    {
      img: './assets/img/portfolio/join.png',
      name: 'Join',
      code: 'Angular | TypeScript | HTML | CSS | Firebase ',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      projectlink: 'https://google.com/',
      githublink: 'https://github.com/',
      reverse: false
    },
    {
      img: './assets/img/portfolio/pollo-loco.png',
      name: 'El Pollo Loco',
      code: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      projectlink: 'https://google.com/',
      githublink: 'https://github.com/',
      reverse: true
    },
    {
      img: './assets/img/portfolio/pokedex.png',
      name: 'Pokedex',
      code: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      projectlink: 'https://google.com/',
      githublink: 'https://github.com/',
      reverse: false
    }];
}
