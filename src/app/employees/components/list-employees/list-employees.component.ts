import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './list-employees.component.html',
  styles: ``
})
export class ListEmployeesComponent implements OnInit {

  employees: any[] = [];

  constructor(private employeeService: EmployeesService) {
    console.log('1. Inside ListEmployeesComponent Constructor');
  }

  ngOnInit(): void {
    // Life cycle hook
    // This hook will be called after the constructor
    // This will be called only once after initial loading
    // whenever the component is coming into view -- this will be called.
    // ideal place for you to make api call
    console.log('2. Inside ngOnInit of ListEmployeesComponent');

    // 1. send a request to the service -- connect using dep injection
    this.employeeService.getEmployees()
      .subscribe((res: any) => {
        // 2. get the response from the service
        console.log(res);
        // 3. display the response in the UI
        this.employees = res;
      });
    
  }


}
