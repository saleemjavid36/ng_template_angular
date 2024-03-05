import { Directive } from "@angular/core";

@Directive({
    selector: '[bodyTemplateDef]'
  })
  export class ExpansionPanelBodyTemplateDirective {
  }
  
  @Directive({
    selector: '[body]'
  })
  export class ExpansionPanelBodyDirective {  
  }
  
  @Directive({
    selector: '[headerTemplateDef]'
  })
  export class ExpansionPanelHeaderTemplateDirective {
  }
  
  @Directive({
    selector: '[header]'
  })
  export class ExpansionPanelHeaderDirective {
  }

  