import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  sources: string[] = [
    'assets/imgs/portfolio/cabin.png',
    'assets/imgs/portfolio/cake.png',
    'assets/imgs/portfolio/circus.png',
    'assets/imgs/portfolio/game.png',
    'assets/imgs/portfolio/safe.png',
    'assets/imgs/portfolio/submarine.png',
];
}
