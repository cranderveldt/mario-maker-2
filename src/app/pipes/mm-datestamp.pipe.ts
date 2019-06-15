import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'mmDatestamp'
})
export class MmDatestampPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const date = new Date();
    date.setTime(value);
    return format(date, 'MMM DD, YYYY - h:mm a');
  }

}
