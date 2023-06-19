import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from 'src/app/interfaces/shoe';
import { UserServiceService } from '../../services/user-service.service';
import { ShoeService } from '../../services/shoe.service';

@Component({
  selector: 'app-list-shoe',
  templateUrl: './list-shoe.component.html'
})
export class ListShoeComponent {
  error:boolean = true;
  shoes:Shoe[] = [];
  isAdminIn$!: Observable<boolean>;

  constructor(private shoeService : ShoeService,private userService : UserServiceService) { }


  ngOnInit(): void {
    this.getShoes();
    this.isAdminIn$= this.userService.isAdminIn;
    
    
    
  }


  getShoes(){
    this.shoeService.getShoes()
    .subscribe({
      next: (resp) => {
        this.shoes = resp
        this.error = false;

      }
    })
  }


}
