import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myoffers',
  templateUrl: './myoffers.component.html',
  styleUrls: ['./myoffers.component.css']
})
export class MyoffersComponent implements OnInit {

  constructor(private service:SharedService,private router:Router) { }
  OfferList: any=[];  

 
  

  ngOnInit(): void {
    this.refreshOfferList();
  }

  refreshOfferList(){
    this.service.UserOffer().subscribe(data=>{
      this.OfferList=data; 
       
    });
  }

  stronaoferty(id:any){
    this.service.sendOfferID(id);
    this.router.navigateByUrl('/offerdetails');     
      
  }
  edytujoferte(id:any){
    this.service.sendOfferID(id);
    this.router.navigateByUrl('/editoffer');     
      
  }

}
