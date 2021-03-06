import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.class';

const URL: string = "http://localhost:8080/api/requests"

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]>{
    return this.http.get(URL + '/') as Observable<Request[]>;
  }

  get(id: number): Observable<Request> {
    console.log("Get a request: " + URL + "/" + id);
    return this.http.get(URL + '/' + id) as Observable<Request>;
  }

  create(request: Request): Observable<Request> {
    return this.http.post(URL + "/", request) as Observable<Request>;
  }

  edit(request: Request): Observable<Request> {
    return this.http.put(URL + "/", request) as Observable<Request>;
  }
  status(request: Request): Observable<Request> {
    return this.http.put(URL + "/submit-review", request) as Observable<Request>;
  }

  listReview(userId: number): Observable<Request[]> {
    return this.http.get(URL + "/list-review/" + userId) as Observable<Request[]>;
  }

  approve(request: Request): Observable<Request> {
    return this.http.put(URL + "/approve", request) as Observable<Request>;
  }

  reject(request: Request): Observable<Request> {
    return this.http.put(URL + "/reject", request) as Observable<Request>;
  }
  

  delete(id: number): Observable<Request> {
    return this.http.delete(URL + '/' + id) as Observable<Request>;
  }
}
