import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-text',
  template:  `
  <div class="justify-center items-center ">
    <input class="rounded-md w-full bg-transparent outline outline-1 p-2 outline-slate-400 focus-visible:outline-slate-500"  type="text"
    [value]="value" />
  </div>
`,
  styleUrls: ['./template-text.component.css']
})
export class TemplateTextComponent implements OnInit {
  @Input() value?: any
  constructor() { }

  ngOnInit(): void {
  }

}
