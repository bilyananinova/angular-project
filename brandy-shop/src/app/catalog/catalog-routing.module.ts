import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { AuthGuard } from '../guards/auth.guard';
import { CatalogComponent } from './catalog-component/catalog.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CatalogComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
    canActivate: [AdminGuard, AuthGuard]
  },
  {
    path: ':id/edit',
    component: EditProductComponent,
    canActivate: [AdminGuard, AuthGuard]
  },
  {
    path: ':id',
    component: ProductDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
