import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListShoeComponent } from './list-shoe/list-shoe.component';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';
import { DelShoeComponent } from './del-shoe/del-shoe.component';
import { DetailShoeComponent } from './detail-shoe/detail-shoe.component';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'list', component: ListShoeComponent },
        { path: 'add', component: AddShoeComponent},
        { path: 'update', component: UpdateShoeComponent},
        { path: 'delete/:id', component: DelShoeComponent},
        { path: 'detail', component: DetailShoeComponent},
      ] 
    }
  ];
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
      RouterModule
    ]
  })
  export class ShoeRoutingModule { }