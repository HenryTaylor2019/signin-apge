import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ActionsComponent } from './actions/actions.component';



@NgModule({
  declarations: [
    FormComponent,
    ActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FormComponent, ActionsComponent]
})
export class ComponentsModule { }
