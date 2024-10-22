import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { EllipsisPipe } from '../shared/pipes/ellipsis.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, EllipsisPipe],
  template: ` <div>
    <h1>Pipes</h1>

    <h2>Let's see date pipe</h2>
    <p>Today is {{ today }}</p>
    <p>Today is {{ today | date }}</p>
    <p>Today is {{ today | date : 'dd/MM/yyyy' }}</p>
    <p>Today is {{ today | date : 'dd/MMM/yyyy hh:mm:ss a' }}</p>

    <h2>uppercase pipe</h2>
    <p>{{ randomText }}</p>
    <p>{{ randomText | uppercase }}</p>

    <h2>Custom Pipe</h2>
    <p>ng g p shared/pipes/ellipsis</p>

    <p>{{ randomText | ellipsis }}</p>
    <p>{{ randomText | ellipsis : 24 }}</p>
    <p>{{ randomText | ellipsis : 60 }}</p>
  </div>`,
  styles: ``,
})
export class AboutComponent {
  today = new Date();

  randomText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.';
}
