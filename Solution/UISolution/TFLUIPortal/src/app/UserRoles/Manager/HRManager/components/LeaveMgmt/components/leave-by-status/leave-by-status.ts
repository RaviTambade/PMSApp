import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-leave-by-status',
  templateUrl: './leave-by-status.html',
})
export class LeaveByStatus implements OnInit{

  // leaveStatus:string="sanctioned";
  // checkStatusSanctioned: boolean = true;
  // checkStatusNotSanctioned: boolean = false;
  checkStatus: string = "applied";
  // leaves:LeaveApplication[]=[];
  leaveDetails:LeaveApplication[]=[];
  constructor(private service:LeavesService){}
  
  ngOnInit(): void {
    this.service.getLeaveApplications(this.checkStatus).subscribe((res)=>{
      this.leaveDetails=res
    })
    // this.service.getAllEmployeeLeaves().subscribe((res)=>{
    //   console.log(res);
    //   this.leaves=res;
    //   this.filterLeaves();
    // })
  }

  // filterActivities(): void {

  //   if(this.checkStatusApplied && this.checkStatusSanctioned && this.checkStatusNotSanctioned){
  //     this.leaveDetails = this.leaves;
  //   }

  //   else if(this.checkStatusApplied && this.checkStatusNotSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'applied' || item.status==='notsanctioned');
  //   }
  //   else if(this.checkStatusNotSanctioned && this.checkStatusSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'notsanctioned' || item.status==='sanctioned');
  //   }

  //   else if(this.checkStatusApplied && this.checkStatusSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'applied' || item.status==='sanctioned');
  //   }
  //   else if(this.checkStatusSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'sanctioned');
  //   }
  //   else if(this.checkStatusNotSanctioned){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'notsanctioned');
  //   }
  //   else if(this.checkStatusApplied){
  //     this.leaveDetails = this.leaves.filter(item => item.status === 'applied');
  //   }
  //   else{
  //     this.leaveDetails=[];
  //   }
  // }

  filterLeaves(){
    console.log(this.checkStatus);
    this.service.getLeaveApplications(this.checkStatus).subscribe((res)=>{
      this.leaveDetails=res
    })
  }
}