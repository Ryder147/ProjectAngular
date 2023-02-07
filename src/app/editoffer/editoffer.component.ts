import { Component,Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.component.html',
  styleUrls: ['./editoffer.component.css']
})
export class EditofferComponent implements OnInit {

  constructor(private service:SharedService, private datepipe:DatePipe,private router:Router ) { }
  

  @Input() dep:any;  
  localization!:string;
  description!: string;
  reference!:string;
  av_start!:string;
  av_end!:string;
  babies!:boolean;
  kids!:boolean;
  old!:boolean;

  OfferInformation :any=[];
  offerid:any;
  

  ngOnInit(): void {
    this.service.offerid.subscribe(data=>this.offerid=data);
    this.uploadSite(this.offerid);
  }

  uploadSite(offerid:any){
    this.service.GetOffer(offerid).subscribe(data=>{
    this.OfferInformation=data[0]; 

    this.localization=this.OfferInformation.localization;
    this.description=this.OfferInformation.description;    
    this.reference=this.OfferInformation.reference;

    this.av_start=this.datepipe.transform(this.OfferInformation.av_start, 'yyyy-MM-dd')!;
    this.av_end=this.datepipe.transform(this.OfferInformation.av_end, 'yyyy-MM-dd')!;
    this.babies=this.OfferInformation.babies;
    this.kids=this.OfferInformation.kids;
    this.old=this.OfferInformation.old;
    });
  }
  

  EditOffer(data:any){
    this.service.updateOfferDetails(data,this.offerid).subscribe(res=>{
      alert("Zauktualizowano Dane Oferty ");
    });
  }

  DeleteOffer(){
    this.service.DeleteOffer(this.offerid).subscribe(res=>{ })
    this.router.navigate(['myoffers'])
  .then(() => {
    window.location.reload();
  });
  }

  

}
