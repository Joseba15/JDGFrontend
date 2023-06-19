import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SupplierModule } from './supplier/supplier.module';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},

{
  path: 'user',
  loadChildren: () => import('./user/user.module').then( m => m.UserModule)
},
{
  path: 'shoe',
  loadChildren: () => import('./shoe/shoe.module').then( m => m.ShoeModule)
},
{
  path: 'supplier',
  loadChildren: () => import('./supplier/supplier.module').then( m => m.SupplierModule)
},
{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
