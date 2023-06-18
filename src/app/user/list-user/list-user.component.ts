import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html'
})
export class ListUserComponent implements OnInit,OnDestroy{

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userService : UserServiceService) { }


  listaUsers:any[] = [];
  error:boolean = true;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.userService.getUsers()
    .subscribe({
      next: (resp) => {
        
        this.listaUsers = resp.content
        this.error = false;
                this.dtTrigger.next(this.listaUsers);

      }
    })
    
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
