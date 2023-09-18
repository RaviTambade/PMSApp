import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { EmployeeprojectsComponent } from './employeeprojects/employeeprojects.component';
import { EmployeeprojectdetailsComponent } from './employeeprojectdetails/employeeprojectdetails.component';
import { EmployeeprojectfiltersComponent } from './employeeprojectfilters/employeeprojectfilters.component';
import { TimesheetlistComponent } from './timesheetlist/timesheetlist.component';
import { TimesheetdetailsComponent } from './timesheetdetails/timesheetdetails.component';
import { ProjectteammembersComponent } from './projectteammembers/projectteammembers.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TasksofprojectsComponent } from './tasksofprojects/tasksofprojects.component';
import { FilteredtasksComponent } from './filteredtasks/filteredtasks.component';
import { AddtimesheetComponent } from './addtimesheet/addtimesheet.component';
import { TaskdetailsinfoComponent } from './taskdetailsinfo/taskdetailsinfo.component';
import { AlltaskslistComponent } from './alltaskslist/alltaskslist.component';
import { FormsModule } from '@angular/forms';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

export const teammemberRoutes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'projects',component:EmployeeprojectsComponent},
  {path:'projectdetails',component:EmployeeprojectdetailsComponent},
  {path:'timesheets',component:TimesheetlistComponent},
  {path:'mytasks',component:TasklistComponent},
  {path:'projecttasks/:projectId',component:TasksofprojectsComponent},
  {path:'alltasks',component:AlltaskslistComponent},
  {path:'employeedetails/:employee',component:EmployeedetailsComponent},
  {path:'timesheetadd',component:AddtimesheetComponent}


]

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeprojectsComponent,
    EmployeeprojectdetailsComponent,
    EmployeeprojectfiltersComponent,
    TimesheetlistComponent,
    TimesheetdetailsComponent,
    ProjectteammembersComponent,
    TasklistComponent,
    TaskdetailsComponent,
    TasksofprojectsComponent,
    FilteredtasksComponent,
    AddtimesheetComponent,
    TaskdetailsinfoComponent,
    AlltaskslistComponent,
    EmployeedetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TeamMemberModule { }