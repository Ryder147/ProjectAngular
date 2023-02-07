import { Component, OnInit } from '@angular/core';
import {Name} from '../offer';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
 

  constructor(private service:SharedService,private router:Router) { }

  testList: any=[];
  testColumns=['title'];

  OfferList: any=[];  

 
  

  ngOnInit(): void {
    this.refreshOfferList();
  }

  refreshOfferList(){
    this.service.GetOfferList().subscribe(data=>{
      this.OfferList=data; 
       
    });
  }

  stronaoferty(id:any){
    this.service.sendOfferID(id);
    this.router.navigateByUrl('/offerdetails');     
      
  }

}