import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetDetailView } from 'src/app/time-sheet/models/timesheet-detail-view';
import { TimeSheetDetails } from 'src/app/time-sheet/models/timesheetdetails';

@Component({
  selector: 'app-add-timesheet-entry',
  templateUrl: './add-timesheet-entry.component.html',
  styleUrls: ['./add-timesheet-entry.component.css']
})
export class AddTimesheetEntryComponent {

  timesheetDetail: TimeSheetDetailView = {
    id: 0,
    fromTime: '',
    toTime: '',
    timesheetId: 0,
    employeeWorkId: 0,
    workTitle: '',
    workType: '',
    projectId: 0,
    projectName: '',
    durationInMinutes: 0,
    durationInHours: ''
  };

  projects: Project[] = [];
  selectedProjectId: number = 0;
  employeeId: number = 0;
  employeeWorks: EmployeeWork[] = [];
  timesheetId: number|undefined;
  constructor(
    private workmgmtSvc: WorkmgmtService,
    private projectSvc: ProjectService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.timesheetId=Number(params.get('id'))
    });
    this.employeeId = Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.projectSvc.getProjectsOfEmployee(this.employeeId).subscribe((res) => {
      this.projects = res;
      if (this.projects.length > 0) {
        this.selectedProjectId = this.projects[0].id;
        this.getWorks();
      }
    });
  }

  onClickAdd() {
    if(this.timesheetId==undefined){
      return;
    }
    let timeSheetDetail: TimeSheetDetails = {
      id: 0,
      fromTime: this.timesheetDetail.fromTime + ':00',
      toTime: this.timesheetDetail.toTime + ':00',
      timesheetId: this.timesheetId,
      employeeWorkId: this.timesheetDetail.employeeWorkId,
    };

    this.workmgmtSvc.addTimeSheetDetails(timeSheetDetail).subscribe((res) => {
      if (res) {
        this.router.navigate(['/timesheet/details',this.timesheetId])
      }
    });
}

onClickCancel(){
  this.router.navigate(['/timesheet/details',this.timesheetId])

}

  getWorks() {
    this.workmgmtSvc
      .getEmployeeWorkByProjectAndStatus(  this.employeeId,  this.selectedProjectId,  'inprogress' )
      .subscribe((res) => {
        this.employeeWorks = res;
        if (this.employeeWorks.length > 0)
          this.timesheetDetail.employeeWorkId = this.employeeWorks[0].id;
      });
  }
  getDuration(timeSheetDetail: TimeSheetDetailView) {
    this.timesheetDetail = this.workmgmtSvc.getDurationOfWork(timeSheetDetail);
  }
}