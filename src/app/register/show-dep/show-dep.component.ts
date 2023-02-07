import { SharedService } from './../../shared.service';
import { Component, OnInit,Input } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { AuthServiceService } from 'src/app/auth-service.service';



@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService, private auth:AuthServiceService) { }

  @Input() dep:any;
  email!:string;
  login!: string;
  password!:string;
  first_name!:string;
  last_name!:string;
  birth_date!:string;
  photolink!:string;
  phonenumber!:string;
  
  UserInformation : any=[];

  ngOnInit(): void {
    this.uploadSide();
  }

  uploadSide(){
    this.service.getUserDetails().subscribe(data=>{
    this.UserInformation=data;
    this.email=this.UserInformation.email;
    this.login=this.UserInformation.login;    
    this.first_name=this.UserInformation.first_name;
    this.last_name=this.UserInformation.last_name;
    this.birth_date=this.UserInformation.birth_date;
    this.phonenumber=this.UserInformation.phonenumber;
    this.photolink=this.UserInformation.photolink;
    });
  }

  UpdateUser(data:any){
    this.service.updateUserDetails(data).subscribe(res=>{
      alert("Zauktualizowano Dane Konta ");
    });
  }

  DeleteAccount(){
    this.service.DeleteAccount().subscribe(res=>{
      alert("Konto Usunięte")
    })
    this.auth.LogOut();    
  }

}
