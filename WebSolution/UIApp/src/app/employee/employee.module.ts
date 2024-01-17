import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { ProjectComponent } from './components/project/project.component';
import { EmployeeLeftSidebarComponent } from './components/employee-left-sidebar/employee-left-sidebar.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { RouterModule, Routes } from '@angular/router';
import { timeSheetRoutes } from '../time-sheet/time-sheet.module';
import { leaveRoutes } from '../leaves/leaves.module';
import { projectRoutes } from '../projects/projects.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SalaryHistoryComponent } from './components/salary-history/salary-history.component';

export const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeeLeftSidebarComponent,
    children: [
      {path:'dashboard', component:DashboardComponent},
      {
        path: 'timesheet',
        component: TimesheetComponent,
        children: timeSheetRoutes,
      },
      { path: 'leave', 
      component: LeavesComponent, 
      children: leaveRoutes },
      {
        path: 'projects',
        component: ProjectComponent,
        children: projectRoutes,
      },
      { path: 'events', component: EventsComponent },
      { path: 'payroll', component: PayrollComponent,
    children: [{path: 'salaryhistory', component: SalaryHistoryComponent}] },
      { path: 'performance', component: PerformenceApprisalComponent },
    ],
  },
];
@NgModule({
  declarations: [
    DashboardComponent,
    TimesheetComponent,
    LeavesComponent,
    ProjectComponent,
    EmployeeLeftSidebarComponent,
    PayrollComponent,
    EventsComponent,
    SalaryHistoryComponent,
    PerformenceApprisalComponent
  ],
  imports: [CommonModule, RouterModule,SharedModule,ReactiveFormsModule], 
  exports:[] 
})
export class EmployeeModule {}
