import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from '../model/lineitem.class';

const URL:string = "http://localhost:8080/api/line-items";

@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<LineItem[]> {
    return this.http.get(URL+"/") as Observable<LineItem[]>;
  }

  get(id: number): Observable<LineItem> {
    return this.http.get(URL+'/'+id) as Observable<LineItem>;
  }

  create(credit: LineItem): Observable<LineItem> {
    console.log("credit create url: "+URL+"/");
    console.log("credit to be added: ", credit);
    return this.http.post(URL+"/", credit) as Observable<LineItem>;
  }

  edit(credit: LineItem): Observable<LineItem> {
    return this.http.put(URL+"/", credit) as Observable<LineItem>;
  }

  delete(id: number): Observable<LineItem> {
    return this.http.delete(URL+'/'+id) as Observable<LineItem>;
  }
  getLines(requestId: number): Observable<LineItem[]> {
    return this.http.get(URL + "/lines-for-pr/"+ requestId) as Observable<LineItem[]>
  }

}