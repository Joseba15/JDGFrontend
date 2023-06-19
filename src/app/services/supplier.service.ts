import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from '../interfaces/shoe';
import { Supplier } from '../interfaces/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url:string = 'http://localhost:8080/supplier'


  constructor(private http:HttpClient) { }


  getSuppliers():Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.url}`) 
  }
}
