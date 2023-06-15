import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from '../interfaces/shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  url:string = 'http://localhost:8080/shoe'


  constructor(private http:HttpClient) { }

  getShoes():Observable<Shoe[]> {
    return this.http.get<Shoe[]>(`${this.url}`) 
  }


}
