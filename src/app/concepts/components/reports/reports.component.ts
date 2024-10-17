import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h4>Generate Report Now</h4>
      <button class="btn btn-primary" (click)="handleGenerateReport()">
        Start Generating Report
      </button>
    </div>
  `,
  styles: ``,
})
export class ReportsComponent {
  // Let's create custom event
  // step 1 of CEB. create an object of class EventEmitter
  @Output() reportGenerated = new EventEmitter(); // step 2 of CEB. make it a custom event with @Output()
  // check concepts.comp.html for Step 3

  handleGenerateReport() {
    console.log(
      'Pls wait while the report is being generated. We will notify you soon'
    );
    // from here let's send the 'report generated successfully and the id: 2435678' to the parent component
    // Because it is a custom event -- we have to trigger / emit it thru program
    this.reportGenerated.emit({
      reportId: 324566,
      message: "Report Generated Successfully!"
    });
  }
}
