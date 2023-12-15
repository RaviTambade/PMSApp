import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Activity } from 'src/app/activity/Models/Activity';
import { ActivityService } from 'src/app/activity/Services/activity.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit{
  constructor(private workMgmtSvc:WorkmgmtService){}
  projectId:number=4
  employeeId:number=15
  activityId:number=0;
  isFalse: boolean = false;
  activity:Activity={
    id: 0,
    title: '',
    description: '',
    activityType: '',
    projectId: 0,
    projectName: 0,
    assignedBy: 0,
    assignedTo: 0,
    assignDate: '',
    startDate: '',
    dueDate: '',
    status: ''
  };
  activityform=new FormGroup({
    title:new FormControl(),
    activitytype:new FormControl(),
    description:new FormControl(),
    assigndate:new FormControl(),
    startdate:new FormControl(),
    duedate:new FormControl(),
    projectid:new FormControl(),
    assignedby:new FormControl(),
    assignedto:new FormControl(),
    createddate:new FormControl(),
    status:new FormControl(),
  
  
  });
  

 status:string="" ;
 activities:Activity[]=[];
  ngOnInit(): void {
   this.workMgmtSvc.getAllNotStartedActivities(this.projectId,this.employeeId).subscribe((res)=>{
    this.activities=res;
    console.log(res);
   })
  }


  onChange(activityId:number){

  this.activityId=activityId;
  this.isFalse=true;
  
   }

   getEvent(event:any){
  console.log(event);
   }

update(){
  this.status=this.activityform.get("status")?.value;
  this.workMgmtSvc.updateActivity(this.status,this.activityId).subscribe((res)=>{
   if(res){
   this.activities= this.activities.filter((activity)=>activity.id!=this.activityId)
   }
   })
}
   
}
