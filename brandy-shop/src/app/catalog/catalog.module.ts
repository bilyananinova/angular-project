import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog-component/catalog.component';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogCardComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [CatalogComponent, CatalogCardComponent, CreateProductComponent, ProductDetailsComponent]
})
export class CatalogModule { }
