import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-image',
  template:  `
  <div class="aspect-video h-52 flex justify-center items-center">
    <img class="object-cover rounded-xl h-full" [src]="value"/>
  </div>
`,
  styleUrls: ['./template-image.component.css']
})
export class TemplateImageComponent implements OnInit {
  @Input() value?: any
  constructor() { }

  ngOnInit(): void {
    console.log("value: ", this.value)
  }


}
