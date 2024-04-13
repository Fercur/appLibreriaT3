import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  private API_USER="http://localhost:3000/usuarios"
  getUsers():Observable<any>{
    return this.http.get(this.API_USER);
  }
}
