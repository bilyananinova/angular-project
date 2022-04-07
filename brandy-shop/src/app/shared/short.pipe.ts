import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortPipe'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return `${value.substring(0, limit - 3)}...`;
    }
    return value;;
  }

}
