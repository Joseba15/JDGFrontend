import { Component } from '@angular/core';
import { Supplier } from 'src/app/interfaces/supplier';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html'
})
export class ListSupplierComponent {

  constructor(private service : SupplierService) { }
  error:boolean = true;


  listaSupplier:Supplier[] = [];


  ngOnInit(): void {
    this.service.getSuppliers()
    .subscribe({
      next: (resp) => {        
        this.listaSupplier = resp;
        this.error = false;
      }
    })
    
  }

}
