import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoeService } from '../../services/shoe.service';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../interfaces/supplier';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html'
})
export class AddShoeComponent {

  listaSupplier: Supplier[] = []

  myForm: FormGroup = this.fb.group({ 
    model: ["",[Validators.required, Validators.minLength(4)]],
    type: ["",[Validators.required, Validators.minLength(2)]],
    price: [1,[Validators.required, Validators.min(0) ]],
    supplier: ["", [Validators.required]]

   })

  
   constructor(private service: ShoeService, private supService: SupplierService 
    ,private fb : FormBuilder, private route: Router) { }
  
    ngOnInit(): void {
          this.supService.getSuppliers()
    .subscribe({
      next: (resp) => {
        this.listaSupplier = resp

      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo ha ido mal'
        }).then((resp) => {
          this.route.navigateByUrl('/shoe/list')
        })
      }
    })
    }
  
  
  add(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();  
    }else{
      this.service.addShoe(this.myForm.value.model,this.myForm.value.type,this.myForm.value.price,this.myForm.value.supplier)
      .subscribe({next: (resp) => {
        if (resp) {
          Swal.fire({
            icon: 'success',
            title: 'shoe added correctly',
          })
          this.route.navigate(["/shoe/list"])
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Couldnt add this shoe'
          })
        }
      }

    })
    }

  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

}
