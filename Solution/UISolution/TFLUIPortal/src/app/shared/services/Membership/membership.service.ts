import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdatePassword } from 'src/app/Entities/UpdatePassword';
import { UserRole } from 'src/app/Entities/UserRole';
import { Role } from 'src/app/user/Models/Role';
import { NewUser } from 'src/app/user/Models/NewUser';
import { User } from 'src/app/user/Models/User';
import { environment } from 'src/environments/environment';
import { updateContact } from 'src/app/Entities/UpdateContact';


@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  membershipUrl:string=environment.membershipUrl;
  
  constructor(private httpClient: HttpClient) { }


  getAllUsers():Observable<User[]>{
    let url=`${this.membershipUrl}/users`;
    return this.httpClient.get<User[]>(url);
  }
  
  getAllRoles(lob:string):Observable<UserRole[]>{
    let url=`${this.membershipUrl}/roles/lob/${lob}`;
    return this.httpClient.get<UserRole[]>(url);
  }

  addNewRole(role:Role):Observable<UserRole[]>{
    let url=`${this.membershipUrl}/roles/role`;
    return this.httpClient.post<UserRole[]>(url,role);
  }

  uploadFile(filename: string, formData: FormData): Observable<any> {
    let url = `${this.membershipUrl}/files/fileupload/${filename}`;
    return this.httpClient.post<any>(url, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  getUser(userId: number): Observable<User> {
    let url = `${this.membershipUrl}/users/${userId}`;
    return this.httpClient.get<User>(url);
  }

  updateUser(id: number, user: User): Observable<any> {
    let url = `${this.membershipUrl}/users/${id}`;
    return this.httpClient.put<any>(url, user);
  }

  updateContactNumber(credential: updateContact): Observable<boolean> {
    let url = `${this.membershipUrl}/auth/updatecontactnumber`;
    return this.httpClient.put<any>(url, credential);
  }
  getEmployee(contactNumber:string):Observable<User>{
    let url=`${this.membershipUrl}/users/contact/${contactNumber}`;
    return this.httpClient.get<User>(url);
  }

  changePassword(credential: UpdatePassword): Observable<boolean> {
    let url = `http://localhost:5142/api/auth/updatepassword`;
    return this.httpClient.put<any>(url, credential);
  }

  addUser(newUser: NewUser): Observable<boolean> {
    let url = `http://localhost:5142/api/users`;
    return this.httpClient.post<boolean>(url, newUser);
  }
}