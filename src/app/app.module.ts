import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReusableCardComponent } from './components/reusable-card/reusable-card.component';
import { DescriptionDirective } from './directives/description-directive.directive';
import { ReusableComponent } from './components/reusable/reusable.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { SuccessTemplateComponent } from './components/success-template/success-template.component';
import { FormsModule } from '@angular/forms';
import { DynamicCardComponent } from './components/dynamic-card/dynamic-card.component';
import { TemplateImageComponent } from './components/template-image/template-image.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { TemplateTextComponent } from './components/template-text/template-text.component';
import { TemplateInputComponent } from './components/template-input/template-input.component';
import { CustomExpansionPanelComponent } from './components/custom-expansion-panel/custom-expansion-panel.component';
import { ExpansionPanelHeaderDirective } from './directives/ExpansionPanelHeaderDirective';
import { CustomTestComponent } from './components/custom-test/custom-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ReusableCardComponent,
    DescriptionDirective,
    ReusableComponent,
    ConditionalComponent,
    SuccessTemplateComponent,
    DynamicCardComponent,
    TemplateImageComponent,
    DynamicComponent,
    TemplateTextComponent,
    TemplateInputComponent,
    CustomExpansionPanelComponent,
    ExpansionPanelHeaderDirective,
    CustomTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
