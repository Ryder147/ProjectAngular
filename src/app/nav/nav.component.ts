import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authService:AuthServiceService, private router:Router) { 
    
  }

  public  islogged=this.authService.isLoggedIn$;
  
  ngOnInit(): void {
  }

  LogOut(){
    this.authService.LogOut();  
  }

  

}
