import { AuthServiceService } from './../auth-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BehaviorSubject, tap } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private _isLoggedIn$=new BehaviorSubject<boolean>(false)
isLoggedIn$=this._isLoggedIn$.asObservable();

  constructor( private service:AuthServiceService,private auth:AuthServiceService,private route:Router) { }
  
  @Input() dep:any;
  email!:string; 
  password!:string


  ngOnInit(): void {
  }

  LoginUser(user:{email:string, password:string}){
    this.service.Loginuser(user);    
    
  }

}


