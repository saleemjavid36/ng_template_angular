import { Component, OnInit } from '@angular/core';
import { ModelDynamicItem } from 'src/app/interfaces/ModelDynamicItem';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  _list: ModelDynamicItem[] = [
    {
      header:"Normal Text",
      valueType:"text",
      value:"template having normal text."
    },
    {
      header:"Input Text",
      valueType:"input",
      value:"input text inside template"
    },
    {
      header:"Image Placeholder",
      valueType:"image",
      value:"https://picsum.photos/500"
    }
  ]

  _onInputChange($event: any) {
      console.log("$event: ", $event)
  }

}
