import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CatalogComponent, CatalogCardComponent]
})
export class CatalogModule { }
