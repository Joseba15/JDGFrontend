import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-shoe',
  templateUrl: './detail-shoe.component.html'
})
export class DetailShoeComponent {

   searchTerm!: string;

  handleSearch(term: string) {
    this.searchTerm = term;
  }
}
