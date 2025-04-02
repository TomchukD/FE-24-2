import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceCategury'
})
export class SliceCateguryPipe implements PipeTransform {

  transform(value: string, separator: string): string {
    if(!value) {
      return ''
    }
    const parts = value.split(separator);
    if(parts.length <= 2) {
      return value;
    }
    return `${parts[0]} ${separator} ... ${separator} ${parts[parts.length - 1]}`;
  }

}
