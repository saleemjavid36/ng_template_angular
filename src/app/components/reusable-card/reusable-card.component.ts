import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { DescriptionDirective } from 'src/app/directives/description-directive.directive';
import { ModelCard } from 'src/app/interfaces/modelcard';

@Component({
  selector: 'app-reusable-card',
  templateUrl: './reusable-card.component.html',
  styleUrls: ['./reusable-card.component.css']
})
export class ReusableCardComponent implements OnInit {
  @Input() model?: ModelCard 
  // contentChild from Parent
  @ContentChild
  // (DescriptionDirective, {read: TemplateRef}) cardDescriptionTemplate?: any;
  (DescriptionDirective, {read: TemplateRef}) cardDescriptionTemplate?: any;
  constructor() { }

  ngOnInit(): void {
  }
}
