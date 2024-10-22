import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-details.component.html',
  styles: ``,
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;
  duplicateEmployee: any;
  employeeId: string | null = '';
  isUpdated = false;

  constructor(
    private employeeService: EmployeesService,
    private route: ActivatedRoute
  ) {
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
        // duplicating to work with form submission via update modal dialog
        this.duplicateEmployee = {
          ...this.employee,
        };
      });
  }

  handleSubmit() {
    console.log(this.duplicateEmployee);
    // let's send this data to the service 
    this.employeeService.updateEmployee(this.duplicateEmployee)
      .subscribe((res: any) => {
        console.log(res);
        if(res && res.id) {
          this.employee = res; // updating the original employee with updated data
          this.isUpdated = true;
        }
      });
  }
}
