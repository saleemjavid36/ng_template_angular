import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { ExpansionPanelHeaderDirective, ExpansionPanelHeaderTemplateDirective, ExpansionPanelBodyDirective, ExpansionPanelBodyTemplateDirective } from 'src/app/directives/ExpansionPanelHeaderDirective';

@Component({
  selector: 'app-custom-expansion-panel',
  templateUrl: './custom-expansion-panel.component.html',
  styleUrls: ['./custom-expansion-panel.component.css'],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({ height: '0', paddingTop: '0', paddingBottom: '0', opacity: 0 })
      ),
      state(
        'expanded',
        style({ height: '*', paddingTop: '*', paddingBottom: '*', opacity: 1 })
      ),
      transition('collapsed <=> expanded', animate('250ms ease-out'))
    ])
  ]
})
export class CustomExpansionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isExpanded = false;

  isCollapsing = false;

  @ContentChild(ExpansionPanelHeaderDirective, { read: TemplateRef }) headerContent?: any;
  @ContentChild(ExpansionPanelHeaderTemplateDirective, { read: TemplateRef }) headerTemplate?: any;
 
  @ContentChild(ExpansionPanelBodyDirective, { read: TemplateRef }) bodyConent?: any;
  @ContentChild(ExpansionPanelBodyTemplateDirective, { read: TemplateRef }) bodyTemplate?: any;

  togglePanel() {
    if (this.isExpanded && !this.isCollapsing) {
      this.isCollapsing = true
    } else {
      this.isExpanded = !this.isExpanded;
      this.isCollapsing = false
    }
  }

  // onAnimationEnd($event: AnimationEvent) {
  onAnimationEnd($event: any) {

    if ($event.toState === "collapsed") {
      this.isCollapsing = false
      this.isExpanded = false
    }
  }

}
