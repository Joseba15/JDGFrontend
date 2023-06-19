import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ShoeService } from '../../services/shoe.service';

@Component({
  selector: 'app-del-shoe',
  templateUrl: './del-shoe.component.html'
})
export class DelShoeComponent implements OnInit {

  idProducto!: number

  constructor(private route: Router, private service: ShoeService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idProducto = this.actRoute.snapshot.params['id']
    this.delShoes()
  }


  delShoes(){
    this.service.deleteShoe(this.idProducto)
    .subscribe({
      next: (resp) => {
        if (resp) {
        Swal.fire({
          icon: 'success',
          title: 'shoe deleted successfuly',

        })
        
        this.route.navigate(["/shoe/list"])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Couldnt delet that shoe'
        })

      }
    }
    })
  }
}
