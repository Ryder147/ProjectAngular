import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component'; 
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { HomeComponent } from './home/home.component';
import { AddEditDepComponent } from './register/add-edit-dep/add-edit-dep.component';
import { ShowDepComponent } from './register/show-dep/show-dep.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { AuthGuardService } from './auth-guard-service.service';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { EditofferComponent } from './editoffer/editoffer.component';
import { DatebookedComponent } from './datebooked/datebooked.component';
import { DatesoldComponent } from './datesold/datesold.component';

const routes: Routes = [
{path:'offers',component:OffersComponent},
{path:'login/offers',component:OffersComponent},
{path:'register',component:AddEditDepComponent},
{path:'login',component:LoginComponent},
{path:'login/register',component:RegisterComponent},
{path:'add-offer',component:AddOfferComponent},
{path:'offerdetails',component:OfferDetailsComponent},
{path:'',component:HomeComponent},
{path:'userDetails',component:ShowDepComponent},
{path:'userDetails/changePassword',component:PasswordChangeComponent},
{path:'myoffers',component:MyoffersComponent},
{path:'editoffer',component:EditofferComponent},
{path:'datebooked',component:DatebookedComponent},
{path:'datesold',component:DatesoldComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
