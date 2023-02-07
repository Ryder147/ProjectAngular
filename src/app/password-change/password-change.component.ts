import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  password!:string;
  n1_password!:string;
  n2_password!:string;


  ngOnInit(): void {
  }


  UpdatePassword(passy:{password:string,n1_password:string,n2_password:string}){
    console.log(passy)
    this.service.UpdatePassword(passy).subscribe(res=>{
      alert("Hasło Zmienione");
    });
  }
}
