import { HttpClient } from '@angular/common/http';
import { RegisterComponent } from './../register.component';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService, private http:HttpClient, private router:Router) { }
  

  @Input() dep:any;
  email!:string;
  login!: string;
  password!:string;
  first_name!:string;
  last_name!:string;
  birth_date!:string;
  

  ngOnInit(): void {
   
  }  

  RegisterUser(user:{email:string, login:string, password:string, first_name:string, last_name:string, birth_date:string}){
    
    this.service.addUser(user).subscribe(res=>{
      this.router.navigate(['login'])
      },error=>{
        alert("Poprawnie uzupełnij wszystkie dane użytkownika ")
      }) 
  }
 

}
