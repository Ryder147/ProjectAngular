import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';
import { RegisterComponent } from './register/register.component';
import { ShowDepComponent } from './register/show-dep/show-dep.component';
import { AddEditDepComponent } from './register/add-edit-dep/add-edit-dep.component';

import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { HomeComponent } from './home/home.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { AuthGuardService } from './auth-guard-service.service';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { EditofferComponent } from './editoffer/editoffer.component';

import { DatePipe } from '@angular/common';
import { DatebookedComponent } from './datebooked/datebooked.component';
import { DatesoldComponent } from './datesold/datesold.component';



@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    RegisterComponent,
    ShowDepComponent,
    AddEditDepComponent,
    LoginComponent,
    NavComponent,
    AddOfferComponent,
    OfferDetailsComponent,
    HomeComponent,
    PasswordChangeComponent,
    MyoffersComponent,
    EditofferComponent,
    DatebookedComponent,
    DatesoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule    
  ],
  providers: [SharedService,DatePipe],  
  bootstrap: [AppComponent]
})
export class AppModule { }
