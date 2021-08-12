import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor.class';

const URL = 'http://localhost:8080/api/vendors';
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  // service functions
  // getAll vendors
  get(): Observable<Vendor[]> {
    return this.http.get(URL + '/') as Observable<Vendor[]>;
  }

  // get a vendor by id
  getById(id: number): Observable<Vendor> {
    return this.http.get(URL + '/' + id) as Observable<Vendor>;
  }

  // create vendor
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(URL + '/', vendor) as Observable<Vendor>;
  }

  // update vendor
  edit(vendor: Vendor): Observable<Vendor> {
    return this.http.put(URL + '/', vendor) as Observable<Vendor>;
  }

  // delete vendor
  delete(id: number): Observable<Vendor> {
    return this.http.delete(URL + '/'+id) as Observable<Vendor>;
  }


}