import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field1: string,field2: string, value: string): any[] {
    if (!items) {
        return [];
    }
    if (!field1 || !field2|| !value) {
        return items;
    }
    return items.filter(singleItem => singleItem[field1].toLowerCase().startsWith(value.toLowerCase()) || singleItem[field2].toLowerCase().startsWith(value.toLowerCase()));
}

}
