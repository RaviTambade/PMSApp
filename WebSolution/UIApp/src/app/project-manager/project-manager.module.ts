import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagerLeftSidebarComponent } from './components/project-manager-left-sidebar/project-manager-left-sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { PerformenceApprisalComponent } from './components/performence-apprisal/performence-apprisal.component';
import { ProjectComponent } from './components/project/project.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { projectRoutes } from '../projects/projects.module';
import { AddActivityComponent } from '../activity/Components/Forms/add-activity/add-activity.component';

export const projectManagerRoutes: Routes = [
  {
    path: '',
    component: ProjectManagerLeftSidebarComponent,
    children: [
      {path:'dashboard', component:DashboardComponent},

      {
        path: 'timesheet',
        component: TimesheetComponent,
      },
      { path: 'leave', component: LeavesComponent },
      {
        path: 'projects',
        component: ProjectComponent,children:[{path:'addWork',component:AddActivityComponent}],
      },
      { path: 'events', component: EventsComponent },
      { path: 'payroll', component: PayrollComponent },
      { path: 'performance', component: PerformenceApprisalComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectManagerLeftSidebarComponent,
    LeavesComponent,
    ProjectComponent,
    PayrollComponent,
    EventsComponent,
    PerformenceApprisalComponent,
    TimesheetComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ProjectManagerModule {}
