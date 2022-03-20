import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog-component/catalog.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: 'brandy-catalog',
    component: CatalogComponent
  },
  {
    path: 'brandy-catalog/create-product',
    component: CreateProductComponent
  },
  {
    path: 'brandy-catalog/:id',
    component: ProductDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
