import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShoeComponent } from '../shoe/list-shoe/list-shoe.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { DelSupplierComponent } from './del-supplier/del-supplier.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { DetailSupplierComponent } from './detail-supplier/detail-supplier.component';
import { ListSupplierComponent } from './list-supplier/list-supplier.component';
import { SupplierRoutingModule } from './supplier.routing.module';



@NgModule({
  declarations: [
    ListSupplierComponent,
    AddSupplierComponent,
    DelSupplierComponent,
    UpdateSupplierComponent,
    DetailSupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ],exports:[
    ListSupplierComponent
  ]
})
export class SupplierModule { }
