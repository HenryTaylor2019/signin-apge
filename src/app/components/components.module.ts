import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ActionsComponent } from './actions/actions.component';

import {MatIconModule} from '@angular/material/icon';
import { HeroComponent } from './hero/hero.component'



@NgModule({
  declarations: [
    FormComponent,
    ActionsComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [FormComponent, ActionsComponent, HeroComponent]
})
export class ComponentsModule { }
