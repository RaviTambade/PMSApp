import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { LeaveConsumptionService } from 'src/app/shared/services/Leave/leaveconsumption.service';



@Component({
  selector: 'add-leave',
  templateUrl: './add-leave.html',
})
export class AddLeave implements OnInit {

  employeeId:any;
  totalDays:number |undefined;
  DifferenceInDays:number |undefined;

  fromDate: Date|any; 
  toDate: Date |any;  
  dateDifference: number|any; 
  dateInMilliseconds: number|any; 
  constructor(private service:LeaveConsumptionService){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }
  ngOnInit(): void {
    // this.calculateDays();
  }
  selectedLeaveType:string='';

  leaveType:string[]=["casual","sick","paid","unpaid"];

  leaveForm=new FormGroup({
    fromDate :new FormControl(),
    toDate :new FormControl(),
    leaveType :new FormControl()
  });

  onSubmit(){
    let leaves:LeaveApplication={
      id: 0,
      employeeId: this.employeeId,
      createdOn:new Date().toISOString(),
      fromDate: this.leaveForm.get("fromDate")?.value,
      toDate: this.leaveForm.get("toDate")?.value,
      status: "applied",
      leaveType: this.leaveForm.get("leaveType")?.value
    }
    console.log(leaves);
    this.service.addNewLeaveApplication(leaves).subscribe((res)=>{
    console.log(res);    
  });
 console.log(this.leaveForm.value)
 }

  calculateDays() {     
    if (this.fromDate && this.toDate) {     
        const diffInMilliseconds = (new Date(this.toDate)).getTime() - (new Date(this.fromDate)).getTime(); 
        console.log(diffInMilliseconds);  
        this.dateInMilliseconds=diffInMilliseconds+86400000;
            this.dateDifference = this.dateInMilliseconds / (1000 * 60 * 60 * 24); 
          } 
          else {       
          this.dateDifference = null; 
    }
  }
}