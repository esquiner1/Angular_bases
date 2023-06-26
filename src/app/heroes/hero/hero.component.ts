import { Component } from '@angular/core';

@Component({//-----> DECORADORES
  selector: 'app-heroes-heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {  //-----> COMPONENTES
//----------PROPIEDADES
  public name: string = "iroman";
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }
  //----------METODOS
  getHeroDescription():string{

    return `${this.name}-${this.age}`
  }

  changeHero():void{
    this.name="Spiderman";

  }
  changeAge():void{
    this.age=20;
  }
  Reset():void{
    this.name="iroman";
    this.age=45;
  }
}
