import { SharedService } from './../shared.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(private service:SharedService,private router:Router ) { }

  @Input() dep:any;  
  localization!:string;
  description!: string;
  reference!:string;
  av_start!:string;
  av_end!:string;
  babies!:boolean;
  kids!:boolean;
  old!:boolean;

  ngOnInit(): void {
  }

  AddOffer(offer:{localization:string, description:string, reference:string, av_start:string, av_end:string, babies:boolean, kids:boolean, old:boolean})
  {
    console.log(offer);
    this.service.addOffer(offer).subscribe(res=>{
      })
    this.router.navigate(['myoffers'])
    .then(() => {
      window.location.reload();
    });
  }

}
