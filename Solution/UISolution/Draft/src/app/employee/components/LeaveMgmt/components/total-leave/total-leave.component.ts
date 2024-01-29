import { Component } from '@angular/core';
import { LeavesCount } from 'src/app/hrmanager/LeaveMgmt/models/LeavesCount';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-total-leave',
  templateUrl: './total-leave.component.html',
  styleUrls: ['./total-leave.component.css']
})
export class TotalLeaveComponent {

  employeeId:number=12;
  pendingLeave:LeavesCount |undefined;
  year:number=2023;


  constructor(private service:LeavesService){
    //  this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }

  ngOnInit(): void {
    this.service.getAnnualLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
  }
}
