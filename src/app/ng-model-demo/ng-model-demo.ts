import { Component, model } from '@angular/core';

@Component({
  selector: 'app-ng-model-demo',
  standalone: false,
  templateUrl: './ng-model-demo.html',
  styleUrl: './ng-model-demo.css',
})
export class NgModelDemo {
  // TODO (Part 1): add one property per control, with a starting value
  //   name    - string
  //   active  - boolean
  //   gender  - string
  //   myRange - number
  //   make    - string
  public name: String = "";
  public makes: String[] = ["Volvo", "Saab", "Mercedes", "Audi"];
  public make = "Volvo";
  public myRange: number = 0;
  public gender: String = "";
  public active: boolean = false;

}
