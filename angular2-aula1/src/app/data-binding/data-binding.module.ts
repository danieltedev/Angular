import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule { }
