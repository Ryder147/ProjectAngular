import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  topayid=new BehaviorSubject<any>(2);
  topayid$=this.topayid.asObservable(); 

  constructor( private router: Router,private authService:AuthServiceService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (this.authService.isNotLoggedIn$) {
      this.router.navigate(['login']);
    }    
    return true;
  }
  sendtopayID(id:any){
    console.log("id w sendtopayID",id);
    this.topayid.next(id);
    console.log("po next",this.topayid.getValue());
    
  }
  gettopayID():Observable<any>{
    console.log("id wysłane przez gettopayid",this.topayid.getValue())
    return this.topayid;

  }

}