import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortPipe } from './short.pipe';



@NgModule({
  declarations: [
    ShortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ShortPipe]
})
export class SharedModule { }
