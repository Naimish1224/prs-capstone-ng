import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.class';

const URL:string = "http://localhost:8080/api/products";

@Injectable({
  providedIn: 'root'})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(URL+"/") as Observable<Product[]>;
  }

  get(id: number): Observable<Product> {
    return this.http.get(URL+'/'+id) as Observable<Product>;
  }

  create(product: Product): Observable<Product> {
    console.log("product create url: "+URL+"/");
    console.log("product to be added: ", product);
    return this.http.post(URL+"/", product) as Observable<Product>;
  }

  edit(product: Product): Observable<Product> {
    return this.http.put(URL+"/", product) as Observable<Product>;
  }

  delete(id: number): Observable<Product> {
    return this.http.delete(URL+'/'+id) as Observable<Product>;
  }

}