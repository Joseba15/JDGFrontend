import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShoeComponent } from './list-shoe/list-shoe.component';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { DelShoeComponent } from './del-shoe/del-shoe.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';
import { DetailShoeComponent } from './detail-shoe/detail-shoe.component';
import { ShoeRoutingModule } from './shoe.routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListShoeComponent,
    AddShoeComponent,
    DelShoeComponent,
    UpdateShoeComponent,
    DetailShoeComponent
  ],
  imports: [
    CommonModule,
    ShoeRoutingModule,
    RouterModule
  ],
  exports: [
    ListShoeComponent
  ]
})
export class ShoeModule { }
