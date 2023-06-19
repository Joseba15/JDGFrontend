import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Shoe } from '../interfaces/shoe';
import { Supplier } from '../interfaces/supplier';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  url:string = 'http://localhost:8080/shoe'


  constructor(private http:HttpClient) { }

  getShoes():Observable<Shoe[]> {
    return this.http.get<Shoe[]>(`${this.url}`) 
  }


  addShoe(model: string, type: string, price: number, idSupplier:number ): Observable<Shoe> {
    return this.http.post<any>(`${this.url}/${idSupplier}`, {
      "model": model,
      "type": type,
      "price": price,
    }).pipe(switchMap(resp => {
        return of(resp);
      }), catchError(error => {
        return of(error);
      })
      )
  }


  deleteShoe(id: number): Observable<boolean> {
    return this.http.delete<any>(`${this.url}/${id}`)
      .pipe(switchMap(resp => {
        return of(true);
      }), catchError(error => {
        return of(false);
      })
      )
  }



}
