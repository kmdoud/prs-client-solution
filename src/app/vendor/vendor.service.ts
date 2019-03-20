import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

const url = "http://localhost:63201/api";

@Injectable
({
  providedIn: 'root'
})
export class VendorService 
{
  //methods
   list(): Observable<Vendor[]>
   {
     return this.http.get(`${url}/vendors`) as Observable<Vendor[]>;
     
   }
   get(id:string): Observable<Vendor>
   {
     return this.http.get(`${url}/vendors/${id}`) as Observable<Vendor>;
     
   }
   create(vendor:Vendor): Observable<any>
   {
     return this.http.post(`${url}/vendors`, vendor) as Observable<any>;
   }
 
   change(vendor:Vendor): Observable<any>
   {
     return this.http.put(`${url}/vendors/${vendor.id}`, vendor) as Observable<any>;
   }
 
   remove(vendor:Vendor): Observable<any>
   {
     return this.http.delete(`${url}/vendors/${vendor.id}`) as Observable<any>;
   }
 
   //constructor

  constructor(private http: HttpClient) { }
}
