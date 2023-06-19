import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-shoe',
  templateUrl: './detail-shoe.component.html'
})
export class DetailShoeComponent {

  nombreBuscado: string = '';

  onBuscarNombre(nombre: string): void {
    this.nombreBuscado = nombre;
  }
  
}
