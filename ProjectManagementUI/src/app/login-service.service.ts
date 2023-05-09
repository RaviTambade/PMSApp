import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  public ValidateUser(form:any):Observable<any>{
    let url = "http://localhost:5084/api/users/validateuser";
    return this.http.post<any>(url,form);
  }
}
