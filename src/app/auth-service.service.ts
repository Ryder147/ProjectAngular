import { BehaviorSubject, delay, Observable, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  errorMsg!: string;

  private _isLoggedIn$=new BehaviorSubject<boolean>(false);
  isLoggedIn$=this._isLoggedIn$.asObservable();

  private _isNotLoggedIn$=new BehaviorSubject<boolean>(true);
  isNotLoggedIn$=this._isNotLoggedIn$.asObservable();
  

  constructor(private http:HttpClient, private service:SharedService, private router:Router ) { 
    const token=localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
    this._isNotLoggedIn$.next(!!!token);
  }
  
   
  
  Loginuser(user:any){
    
    this.service.LoginUser(user).pipe(
      tap((response:any)=>{
        this._isLoggedIn$.next(true);
        this._isNotLoggedIn$.next(false);
        localStorage.setItem('token',response) 
        
      })
    ).subscribe(data=>{      
      this.router.navigate(['offers'])
    },error=>{
      alert("Błędny Login lub Hasło")
    }) 
  }
   
    
 

  LogOut(){
    localStorage.removeItem("token");    
    this.router.navigate(['login'])
  .then(() => {
    window.location.reload();
  });    

  }



  
  


}
