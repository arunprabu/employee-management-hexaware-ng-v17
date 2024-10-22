import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';

// because of this Injectable decorator, we can dep inject this service in any component
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  // Note: to make this dep injection work --
  // you need to include  provideHttpClient() inside providers in app.config.ts
  constructor(private http: HttpClient) {}

  // create
  addEmployee(formData: any) {
    // 1. get the data from the component
    console.log(formData);

    // 2. send the data to the rest api
    // 2.1 what's the rest api url? https://jsonplaceholder.typicode.com/users
    // 2.2 what's the http method? POST
    // 2.3 what's the REST API client? HttpClient
    return this.http
      .post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe(
        map((res: any) => {
          // 3. get the response from the rest api
          console.log('Response Received from REST API');
          console.log(res);
          return res; // 4. send the response to the component
        })
      );
  }

  // read
  getEmployees() {
    // 1. get the request from the component
    console.log('3. Inside getEmployees');

    // 2. send the request to the rest api
    // 2.1 what's the rest api url? https://jsonplaceholder.typicode.com/users
    // 2.2 what's the http method? GET
    // 2.3 what's the REST API client? HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((res: any) => {
        // 3. get the response from the rest api
        console.log('4. Response Received from REST API');
        console.log(res);
        return res; // 4. send the response to the component
      })
    );
  }

  // read
  getEmployeeById(id: string | null) {
    console.log(id);
    return this.http
      .get('https://jsonplaceholder.typicode.com/users/' + id)
      .pipe(
        map((res: any) => {
          console.log('Response Received from REST API');
          console.log(res);
          return res;
        })
      );
  }

  updateEmployee(employee: any) {
    console.log(employee);
    return this.http
      .put('https://jsonplaceholder.typicode.com/users/' + employee.id, employee)
      .pipe(
        map((res: any) => {
          console.log('Response Received from REST API');
          console.log(res);
          return res;
        })
      );
  }
}
