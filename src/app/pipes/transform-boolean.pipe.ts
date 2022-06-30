import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBoolean'
})
export class TransformBooleanPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value === "true"){
      return 'Si';
    }
    else{
      return 'No';
    }
  }

}
