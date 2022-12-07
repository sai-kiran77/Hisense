import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone'
})
export class MaskPhonePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    value = String(value);
    return value.substring(0, 4) + "****" + value.substring(8);
  }

}
