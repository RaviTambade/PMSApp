import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SPAContainer } from './spa-container/spa-container';
import { ProjectManagerContainer } from '../ProjectManager/components/container/projectmanager-container';
import { projectManagerRoutes } from '../ProjectManager/project-manager.module';
import { HRManagerContainer } from '../HRManager/components/container/hrmanager-container';
import { hrRoutes } from '../HRManager/hrmanager.module';
import { DirectorContainer } from '../Director/components/container/director-container';
import { employeeRoutes } from '../Employee/employee.module';
import { EmployeeContainer } from '../Employee/components/container/employee-container';
import { Login } from '../authentication/Components/login/login';

const routes: Routes = [
  { path: 'prjmanagers', component: ProjectManagerContainer, children:projectManagerRoutes},
  { path: 'hrmanagers', component: HRManagerContainer,children:hrRoutes},
  { path:'directors', component: DirectorContainer },
  { path: 'employees', component: EmployeeContainer, children:employeeRoutes},
  { path: 'login', component: Login },
 ];
 
@NgModule({
  declarations:[SPAContainer],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,SPAContainer],
})
export class SPAModule {}