import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog-component/catalog.component';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogCardComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [CatalogComponent, CatalogCardComponent, CreateProductComponent]
})
export class CatalogModule { }
