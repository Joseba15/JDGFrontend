import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { DecodeToken } from '../interfaces/decodetoken.interface';
import jwt_decode from 'jwt-decode';
import { TokenInterface } from '../interfaces/token.interface';
import { User } from '../interfaces/user.interface';
import { Pageable } from '../interfaces/pageable.interface';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url:string = 'http://localhost:8080/user'
  urlSingUp:string = 'http://localhost:8080/signup'
  urlLogin:string = 'http://localhost:8080/login'
  
  private loggedIn = new BehaviorSubject<boolean> (false);
  private adminIn = new BehaviorSubject<boolean> (false);
 
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isAdminIn(){
    return this.adminIn.asObservable();
  }

  constructor(private http : HttpClient, private cookies: CookieService) { }



  getUser(query:string):Observable<User> {
    return this.http.get<User>(`${this.url}${query}`) 
  }

  getUsers():Observable<Pageable> {
    return this.http.get<Pageable>(`${this.url}/page`) 

    
  }

  register(username: string, password:string, name:string, email:string):Observable<boolean>{
 
    return this.http.post<any>(this.urlSingUp, {"username":username, "password":password, "name":name, "email":email},this.httpOptions)
    .pipe( switchMap(resp => {
            return of(true);
        }),catchError(error => {
            return of(false);
        })
    )
  }


  login(username:string, password:string):Observable<boolean>{
    // console.log('Username: ', username, 'Password: ', password);
    
    return this.http.post<TokenInterface>(this.urlLogin,{"username":username,"password":password}, this.httpOptions)
    .pipe(  switchMap(token=> {
      
      this.cookies.set('token',token.token);
      this.cookies.set('role',this.decodeJwt(token.token).role)
      this.cookies.set('login','true');

      if(this.decodeJwt(token.token).role=='ADMIN'){
          this.adminIn.next(true);
      }
       this.loggedIn.next(true);
      return of (true);
      
    }),catchError(error =>{
      this.cookies.delete('token');
      this.loggedIn.next(false);
      this.adminIn.next(false);
      console.log(error);
      
      return of (false);
    }))
  }

  decodeJwt(jwt: string): DecodeToken {        
    return jwt_decode(jwt)     
  }


  logout(){
    this.loggedIn.next(false);
    this.adminIn.next(false);
    this.cookies.delete('token');
    this.cookies.delete('role');
  }

}
