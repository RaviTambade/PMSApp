import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivityService } from '../../Services/activity.service';
import { Activity } from '../../Models/Activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit{
  @Output() selectedActivities=new EventEmitter<Activity>()
  constructor(private service :ActivityService){}
  activities:Activity[]=[];
  projectId:number=1;
  assignedTo:number=2;
  ngOnInit(): void {
   this.service.getAllActivities(this.projectId,this.assignedTo).subscribe((res)=>{
   this.activities=res;
   this.selectedActivities.emit(this.activities[0]);
   })
  }



  sendEvent(activity:Activity){
    this.selectedActivities.emit(activity);
  }

}
