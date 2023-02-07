import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://127.0.0.1:8000/";
readonly PhotoUrl="http://127.0.0.1:8000/media/";
router: any;

offerid=new BehaviorSubject<any>(0);



private topayid=new BehaviorSubject<any>(0);
topayid$=this.topayid.asObservable();
  
constructor(private http:HttpClient) {  }

hhttpOptions = { headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})};
 
  id:any;  
  

  sendOfferID(id:any){
    this.offerid.next(id);
    this.id=id;
  }
  getOfferID(){
    
    return this.offerid;

  }
  sendtopayID(id:any){
    console.log("id w sendtopayID",id);
    this.topayid.next(id);
    console.log("po next",this.topayid.getValue());
    
  }
  gettopayID():Observable<any>{
    console.log("id wysłane przez gettopayid",this.topayid.getValue())
    return this.topayid;

  }

  Payment(val:any,price:any){
    return this.http.post(this.APIUrl+'payment/'+price,val)
  }
  PaymentAccepted(val:any,id:any){
    return this.http.put(this.APIUrl+'paymentaccepted/'+id,val)
  }

  getUserList(): Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/Users')
  }

  getUser(id:any): Observable<any[]>{    
    return this.http.get<any[]>(this.APIUrl+'Users/'+id)
  }
  getUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'UserDetails/',{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }

  updateUserDetails(val:any){
    return this.http.put(this.APIUrl+'UserDetails/',val,{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }
  UpdatePassword(val:any){
    return this.http.put(this.APIUrl+'ChangePassword/',val,{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }

  DeleteAccount(){
    return this.http.delete(this.APIUrl+'UserDetails/',{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }
  DateBookedemployer(val:any,id:any){
    return this.http.post(this.APIUrl+'datebookedEmployer/'+id,val,{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }

  getDateBookedEmployer():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'datebookedEmployer/',{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }
  getSpecyficDateBookedEmployer(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'datebookedEmployerStrict/'+id,{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }
  putDateBookedEmployer(val:any,id:any){
    return this.http.put(this.APIUrl+'datebookedEmployer/'+id,val,{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }
  deleteDateBookedEmployer(id:any){
    return this.http.delete(this.APIUrl+'datebookedEmployer/'+id)
  }

  getDateBookedEmployee():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'datebookedEmployee/',{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }
  putDateBookedEmployee(val:any,id:any,accept:any){
    return this.http.put(this.APIUrl+'datebookedEmployee/'+id+'/'+accept,val,{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'register/',val)
  }
  
  

  LoginUser(val:any){
    return this.http.post(this.APIUrl+'login/',val)
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl+'Users/',val)
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+'Users/'+val)
  }

  addOffer(val:any){
    return this.http.post(this.APIUrl+'offer/',val,{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }

  GetOfferList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'offer/')
  }

  GetOffer(id:any): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'offerdetails/'+id)
  }

  UserOffer(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'useroffers/',{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }

  updateOfferDetails(val:any,id:any){
    return this.http.put(this.APIUrl+'offerdetails/'+id,val,{ headers: new HttpHeaders({'Authorization': 'Token ' +localStorage.getItem("token")})})
  }

  DeleteOffer(id:any){
    return this.http.delete(this.APIUrl+'offerdetails/'+id)
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'SaveFile/',val)
  }

  getReservedList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'avBooked/')
  }

  gettestList(): Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos/')
  }
  
}
