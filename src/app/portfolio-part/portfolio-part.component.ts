import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-part',
  templateUrl: './portfolio-part.component.html',
  styleUrls: ['./portfolio-part.component.scss']
})
export class PortfolioPartComponent {
  projects = [
    {
      img: './assets/img/jointest2gut.png',
      name: 'Join',
      code: 'JavaScript | HTML | CSS',
      description: 'Task management tool inspired by the Kanban System. Easily create and organize tasks using drag-and-drop functions and assign them to users or categories.',
      projectlink: 'https://albert-wissigkeit.de/Join/',
      githublink: 'https://github.com/CrazyBird007/Join',
      reverse: false
    },
    {
      img: './assets/img/portfolio/pollo-loco-pc.png',
      name: 'El Pollo Loco',
      code: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on an object-oriented approach. Help Pepe collect coins and salsa to fight the crazy hen.',
      projectlink: 'https://albert-wissigkeit.de/ElPolloLoco/',
      githublink: 'https://github.com/CrazyBird007/PolloLoco',
      reverse: true
    },
    {
      img: './assets/img/pokedex-pc.png',
      name: 'Pokedex',
      code: 'JavaScript | HTML | CSS | API',
      description: 'Based on the PokéAPI, a simple library that provides and catalogs Pokémon information.',
      projectlink: 'https://albert-wissigkeit.de/PokeDex/',
      githublink: 'https://github.com/CrazyBird007/PokeDex',
      reverse: false
    }];
}
