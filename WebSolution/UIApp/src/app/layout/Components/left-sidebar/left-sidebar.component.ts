import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/shared/enums/role';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { JwtService } from 'src/app/shared/services/jwt.service';
import { UrlType } from '../../../shared/models/UrlType';
@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit {
  Role=Role;

  role :string|undefined= undefined;
    
  constructor( private jwtSvc:JwtService,private router:Router ){}
  ngOnInit(): void {
    let role = this.jwtSvc.getClaimFromToken(TokenClaims.role);
   
    if (role != null) {
      this.role = role;
    }
  }

  EmployeeRoutes:UrlType[]=[{displayName:"projects",Url:"projects"},
                            {displayName:"timesheet",Url:"timesheet"},
                            {displayName:"Events",Url:"Events"},
                            {displayName:"Leaves",Url:"leave"},
                            {displayName:"Payroll",Url:"Payroll"}];

  DirectorRoutes:UrlType[]=[{displayName:"Projects",Url:"projects"},
                            {displayName:"Director Link 2",Url:"Director Link 2"},
                            {displayName:"Director Link 3",Url:"Director Link 3"},
                            {displayName:"Director Link 4",Url:"Director Link 4"},
                            {displayName:"Director Link 5",Url:"Director Link 5"}];

  HRManagerRoutes:UrlType[]=[{displayName:"AppliedLeaves",Url:"leave"},
                            // {displayName:"Appliedlist",Url:"leave"}
                          ];


  onClick(url:string){

  this.router.navigate([url]);
  }


  onDirectorClick(url:string){

    this.router.navigate([url]);
    }
}
