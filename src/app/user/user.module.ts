import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../auth-interceptor.service';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    ListUserComponent

  ],providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class UserModule { }
