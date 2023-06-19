import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  implements OnInit{

  isLoggedIn$!: Observable<boolean>;
  isAdminIn$!: Observable<boolean>;


  @Output() buscarNombre: EventEmitter<string> = new EventEmitter<string>();

  nombreBusqueda: string = '';
  
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn$=this.service.isLoggedIn;
    this.isAdminIn$= this.service.isAdminIn;
  }

  logout(){
    this.service.logout();
  }


  onBuscar(): void {
    this.buscarNombre.emit(this.nombreBusqueda);
  }
}
