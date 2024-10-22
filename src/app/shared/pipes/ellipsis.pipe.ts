import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    console.log(value);
    console.log(args[0]);
    return value.substring(0, args[0]) + '...';
  }

}
