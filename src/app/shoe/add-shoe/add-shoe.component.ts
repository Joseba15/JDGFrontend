import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoeService } from '../../services/shoe.service';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html'
})
export class AddShoeComponent {
  
  myForm: FormGroup = this.fb.group({ 
    model: ["",[Validators.required, Validators.minLength(4)]],
    type: ["",[Validators.required, Validators.minLength(2)]],
    price: [1,[Validators.required, Validators.min(0) ]],

   })

  
   constructor(private service: ShoeService, private fb : FormBuilder, private route: Router) { }
  
  
  
  
  
  add(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();  
    }
  }


}
