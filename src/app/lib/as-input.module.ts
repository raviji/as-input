import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AsInputComponent } from './as-input/as-input.component';
import { InputRefDirective } from './common/input-ref.directive';

@NgModule({
  declarations: [
    AsInputComponent, InputRefDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [AsInputComponent, InputRefDirective]
})
export class AsInputModule {}
