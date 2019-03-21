import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLine } from "./request-line.class";

const url = "http://localhost:63201/api";

@Injectable
({
  providedIn: 'root'
})
export class RequestLineService 
{

  list(): Observable<Request[]>
  {
    return this.http.get(`${url}/requests`) as Observable<Request[]>;
    
  }
  get(id:string): Observable<RequestLine>
  {
    return this.http.get(`${url}/requestLines/${id}`) as Observable<RequestLine>;
    
  }
  create(requestLine:RequestLine): Observable<any>
  {
    return this.http.post(`${url}/requestLines`, requestLine) as Observable<any>;
  }

  change(requestLine:RequestLine): Observable<any>
  {
    return this.http.put(`${url}/requestLines/${requestLine.id}`, requestLine) as Observable<any>;
  }

  remove(requestLine:RequestLine): Observable<any>
  {
    return this.http.delete(`${url}/requestLines/${requestLine.id}`) as Observable<any>;
  }

  //constructor
  constructor(private http:HttpClient) { }
}
