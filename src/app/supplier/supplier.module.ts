import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShoeComponent } from '../shoe/list-shoe/list-shoe.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { DelSupplierComponent } from './del-supplier/del-supplier.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { DetailSupplierComponent } from './detail-supplier/detail-supplier.component';



@NgModule({
  declarations: [
    ListShoeComponent,
    AddSupplierComponent,
    DelSupplierComponent,
    UpdateSupplierComponent,
    DetailSupplierComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupplierModule { }
