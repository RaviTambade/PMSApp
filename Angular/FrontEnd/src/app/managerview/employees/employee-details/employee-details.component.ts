
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent  implements OnInit {

    id: any;
    employee: Employee | undefined;
  
    constructor(private svc: ManagerviewService, private route: ActivatedRoute) { }
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('empid');
      console.log(this.id);
      this.svc.getEmployee(this.id).subscribe((response) => {
      this.employee = response;
      console.log(response);
      })
    }
  
  
  }
  {
  
  }

