import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListUserComponent } from './list-user/list-user.component';
const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'listpage', component: ListUserComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent},

      ] 
    }
  ];
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
      RouterModule
    ]
  })
  export class UserRoutingModule { }