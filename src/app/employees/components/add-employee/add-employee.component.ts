import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule, // for ngClass to work
    ReactiveFormsModule, // for formGroup to work
  ],
  templateUrl: './add-employee.component.html',
  styles: ``,
})
export class AddEmployeeComponent {
  // Step 1:  have the ts file with form tag equivalent (FromGroup)
  addEmployeeForm: FormGroup;
  isSaved = false;

  constructor(private employeesService: EmployeesService) {
    this.addEmployeeForm = new FormGroup({
      // step 2: have the ts file with form fields equivalent (FormControl)
      name: new FormControl('', Validators.required), // step 5: implement validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    // For step 3: refer html file
  }

  handleSubmit() {
    // Let's collect the form data
    console.log(this.addEmployeeForm.value);
    // 1. connect to service using dep injection -- refer constructor
    // 2. send the above form data to the service 
    this.employeesService
      .addEmployee(this.addEmployeeForm.value)
      .subscribe((res: any) => {
        // 3. get the response from the service
        console.log(res);
        if(res && res.id) {
          this.isSaved = true;
        }
        // 4. display the response in the UI
      });
  }
}
