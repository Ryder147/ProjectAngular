import { SharedService } from 'src/app/shared.service';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  constructor(private service:SharedService,private router:Router) { }

  
  OfferInformation: any=[];
  offerid:any;

  UserInformation: any=[];
  userid:any;

  age:any;

  @Input() dep:any;  
  date_booked!:string;
  start_hour!:string;
  end_hour!:string; 
  years_old!:any;
  localization!:string;
  description!: string;
 
  min!:string;
  max!:string;
  
  av_end!:string;
  
  photolink!:string;

  phototrue!:boolean;

  ngOnInit(): void {
    this.service.offerid.subscribe(data=>this.offerid=data);
    this.uploadSite(this.offerid);
  }


  uploadSite(offerid:any){
   
    
    this.service.GetOffer(offerid).subscribe(data=>{
        this.OfferInformation=data[0];  

      
        this.userid=this.OfferInformation.user;
        this.service.getUser(this.userid).subscribe(data=>{
        this.UserInformation=data;
        if(this.UserInformation.photolink=="" || this.UserInformation.photolink==null){
          this.photolink="https://static.zakumaj.pl/data/store/2015/10/98d0a565-4d35-88fb-5557-3977dee48380/picture_large.jpg"
        }else{
          this.photolink=this.UserInformation.photolink;
        }
        const tmp=new Date(this.UserInformation.birth_date.toString());
        this.age=new Date().getTime() - tmp.getTime();
        this.age=Math.floor( this.age/31536000000);
      });
    }); 
  }

  BookOffer(bookedoffer:{localization:string, description:string,date:string, start_hour:string, end_hour:string, years_old:any})
  {
    console.log(bookedoffer);
    this.service.DateBookedemployer(bookedoffer,this.OfferInformation.user).subscribe(res=>{
      
    })
    this.router.navigate(['datebooked'])
    .then(() => {
      window.location.reload();
    });
  }



}
