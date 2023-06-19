import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSupplierComponent } from './list-supplier/list-supplier.component';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'list', component: ListSupplierComponent },

      ] 
    }
  ];
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
      RouterModule
    ]
  })
  export class SupplierRoutingModule { }