import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  @ViewChild('myForm') myForm!: NgForm; 


  userData={
    username: "",
    password: "",
    name:"",
    email:""
  }
  isLoggedIn!: boolean;

  
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
  }

  notValidUsername(): boolean{
    return this.myForm?.controls['username']?.invalid &&
      this.myForm?.controls['username']?.touched
  }

  notValidPassword(): boolean{
    return this.myForm?.controls['password']?.invalid &&
      this.myForm?.controls['password']?.touched
  }

  notValidName(): boolean{
    return this.myForm?.controls['name']?.invalid &&
      this.myForm?.controls['name']?.touched
  }

  notValidEmail(): boolean{
    return this.myForm?.controls['email']?.invalid &&
      this.myForm?.controls['email']?.touched
  }


  signUp():void{
    this.service.register(this.myForm.value.username,this.myForm.value.password,this.myForm.value.name,this.myForm.value.email)
    .subscribe({
      next: (resp) => {
        if (resp) {
          this.isLoggedIn=true;
          Swal.fire({
            icon: 'success',
            title: 'Successful Register',
          })
          
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Try again!'
          })
        }
      }
    })}
}
