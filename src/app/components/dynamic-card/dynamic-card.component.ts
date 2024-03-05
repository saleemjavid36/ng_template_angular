import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ModelDynamicItem } from 'src/app/interfaces/ModelDynamicItem';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent implements OnInit {
  @Input() data?: ModelDynamicItem
  @Input() template?: TemplateRef<HTMLElement>
  constructor() { }

  ngOnInit(): void {
  }

}
