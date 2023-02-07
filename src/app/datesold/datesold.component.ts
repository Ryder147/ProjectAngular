import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datesold',
  templateUrl: './datesold.component.html',
  styleUrls: ['./datesold.component.css']
})
export class DatesoldComponent implements OnInit {

  constructor(private service:SharedService,private router:Router) { }
  DateBookedList: any=[];  
  DateBookedInformation: any=[];  

  dateid!:any;

 
  

  ngOnInit(): void {
    this.refreshDateList();
  }

  refreshDateList(){
    this.service.getDateBookedEmployee().subscribe(data=>{
      this.DateBookedList=data;         
    })
  }
  DeleteDateBooked(id:any){
    this.service.deleteDateBookedEmployer(id).subscribe(data=>{      
      window.location.reload();
  });
  }
  
  loaddate(dateid:any){
    this.service.getSpecyficDateBookedEmployer(dateid).subscribe(data=>{
      this.DateBookedInformation=data; 
      this.dateid=dateid;
    });
  }
  
  response(id:any,resp:any){
    this.service.putDateBookedEmployee(this.DateBookedInformation,id,resp).subscribe(data=>{
      window.location.reload();
    })
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
        }else{
          return false;
        }    
      }
      else if(yeardiff>0)
      {
        return true;
      }else{
        return true;
      }

      
  }
  
}
