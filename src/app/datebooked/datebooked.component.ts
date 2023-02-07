import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit,Input,Inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-datebooked',
  templateUrl: './datebooked.component.html',
  styleUrls: ['./datebooked.component.css']
})
export class DatebookedComponent implements OnInit {
 
  

  constructor(private service:SharedService,private router:Router,private activatedRoute:ActivatedRoute) {  }
  DateBookedList: any=[]; 
  
  DateBookedInformation: any=[];

  UserInformation: any=[];
  

  @Input() dep:any;  
  date_booked!:string;
  start_hour!:string;
  end_hour!:string; 
  years_old!:any;
  localization!:string;
  description!: string;
  
  dateid!:any;

  checkouturl!:string;

  topayid!:any;
 

  ngOnInit(): void {
    this.getStripeStatus();
    
    this.refreshDateList();


     
  }

  refreshDateList(){
    this.service.getDateBookedEmployer().subscribe(data=>{
      this.DateBookedList=data;     
       
    });
  }

  loaddate(dateid:any){
    this.service.getSpecyficDateBookedEmployer(dateid).subscribe(data=>{
      this.DateBookedInformation=data;     
      this.date_booked=this.DateBookedInformation.date_booked;
      this.start_hour=this.DateBookedInformation.start_hour;
      this.end_hour=this.DateBookedInformation.end_hour;
      this.years_old=this.DateBookedInformation.years_old;
      this.localization=this.DateBookedInformation.localization;
      this.description=this.DateBookedInformation.description;

      this.dateid=dateid;


    });
  }

  
  editdate(data:any,id:any){        
      this.service.putDateBookedEmployer(data,id).subscribe(data=>{
          alert('Zmieniono Dane Rezerwacji');
          window.location.reload();
      });
      
  }

  DeleteDateBooked(id:any){
    this.service.deleteDateBookedEmployer(id).subscribe(data=>{
      window.location.reload();
  });
  }
  
  
  pay(id:any,start:string,end:string){
    var timeStart = new Date("01/01/2007 " + start);
    var timeEnd = new Date("01/01/2007 " + end);
    
    var diff =(timeEnd.getTime() - timeStart.getTime()) / 1000;
    diff /= 3600;
    

    var hourDiff = Math.abs(Math.round(diff)); 
    
    localStorage.setItem('topay',id);

    this.service.Payment(timeStart,hourDiff).subscribe(data=>{
           
      window.location.replace(data.toString());
  
      
    })
    
    

  }
  getStripeStatus()
   {
    let action = this.activatedRoute.snapshot.queryParamMap.get('action');              // ex: '/home?action=success'
    
    if (action && action == 'cancel' ){
        alert("Płatność zakończona niepowodzeniem" )
      }
    else if(action && action=='success'){     
        this.topayid=localStorage.getItem('topay');       
        localStorage.removeItem('topay');        
        this.service.PaymentAccepted(action,this.topayid).subscribe(data=>{
          alert('Rezerwacja Opłacona');
          window.location.reload();                 
        })        
    }    
  }

  datetoremove(data:string){
    var today=new Date();
    var datebook=new Date(data.toString());
    var monthdiff=today.getMonth()-datebook.getMonth();
    var daydiff=today.getDate()-datebook.getDate();
    var yeardiff=today.getFullYear()-datebook.getFullYear();
    console.log(daydiff,monthdiff,  yeardiff);
      if(yeardiff=0)
      {
        if(daydiff>0 && monthdiff==0 || monthdiff>0 )
        {      
          return true;
        }    
      }
      else if(yeardiff>0)
      {
        return true;
      }
      return false;
     
      
    
  }

userInfo(id:any){
  
  this.service.getUser(id).subscribe(data=>{
    this.UserInformation=data;
    return this.UserInformation['phonenumber'];
  });
  

}


}
