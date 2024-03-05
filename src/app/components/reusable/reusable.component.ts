import { Component, OnInit } from '@angular/core';
import { ModelCard } from 'src/app/interfaces/modelcard';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {
  _model1 : ModelCard=  {
    date: new Date(Date.now()),
    name:"Ng-Template-practice",
    description :"Text"
  }

  _model2 : ModelCard=  {
    date: new Date(Date.now()),
    name:"Ng-Template-practice2",
    description :"https://picsum.photos/500"
  }

  constructor() { }

  ngOnInit(): void {
  }
 

}
