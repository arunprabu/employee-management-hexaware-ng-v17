import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListEmployeesComponent } from './employees/components/list-employees/list-employees.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';

// configure the routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  {
    path: 'employees',
    children: [
      { path: '', component: ListEmployeesComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: ':id', component: EmployeeDetailsComponent }, // id is url param
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'users',
    // lazy loading a module
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];
