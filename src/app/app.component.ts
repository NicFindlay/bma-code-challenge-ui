import { Component } from '@angular/core';
import {SuperHero} from './models/super-hero';
import {SuperHeroService} from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App.UI';
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService){}

  ngOnInit(): void{
    this.superHeroService.getSuperHeroes().subscribe((result: SuperHero[]) => (this.heroes = result));
    console.log(this.heroes);
  }


}
