import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';

const URL = 'http://localhost:8080/api/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // service functions
  // getAll users
  get(): Observable<User[]> {
    return this.http.get(URL + '/') as Observable<User[]>;
  }

  // get a user by id
  getById(id: number): Observable<User> {
    return this.http.get(URL + '/' + id) as Observable<User>;
  }

  // create user
  create(user: User): Observable<User> {
    return this.http.post(URL + '/', user) as Observable<User>;
  }

  // update user
  edit(user: User): Observable<User> {
    return this.http.put(URL + '/', user) as Observable<User>;
  }

  // delete user
  delete(id: number): Observable<User> {
    return this.http.delete(URL + '/'+id) as Observable<User>;
  }

  // login
  login(u: User): Observable<User> {
    return this.http.post(URL+'/login', u) as Observable<User>;
  }

}