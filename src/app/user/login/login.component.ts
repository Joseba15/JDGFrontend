import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  myForm: FormGroup = this.fb.group({ 
    username: ["",[Validators.required, Validators.minLength(3)]],
    password: ["",[Validators.required, Validators.minLength(3)]],

   })

   
   isLoggedIn!: boolean;


  constructor(private service: UserServiceService, private fb : FormBuilder, private route: Router) { }


  ngOnInit(): void {
  }


  login(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();  
    }
    
    this.service.login(this.myForm.value.username,this.myForm.value.password)
    .subscribe({
      next: (resp) => {
        if (resp) {
          this.isLoggedIn=true;
          Swal.fire({
            icon: 'success',
            title: 'Login succesfull',
          })
          this.myForm.reset({
          place: '',
          entryDate: '',
         })
          this.route.navigate(['']);

        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'username and/or password not correct'
          })
        }
      }
    })
  

  }
}
