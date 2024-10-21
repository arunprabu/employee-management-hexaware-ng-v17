import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styles: ``
})
export class EmployeeDetailsComponent implements OnInit{

  employee: any;
  employeeId: string | null = '';

  constructor(private employeeService: EmployeesService, private route: ActivatedRoute) {
    // read the url param
    this.employeeId = this.route.snapshot.paramMap.get('id');
    console.log(this.employeeId);
  }

  ngOnInit(): void {
    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((res: any) => {
        console.log(res);
        this.employee = res;
      });
  }

}
