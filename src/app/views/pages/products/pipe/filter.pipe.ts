import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(items: any[], value: string,): any[] {
  //   // return empty array if array is falsy
  //   if (!items) { return []; }
  //   // return the original array if search text is empty
  //   if (value == "Default") { return items; }
  // }
  transform(items: any[], value: string): any[] {

    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if value = Default
    if (value == "Default") { return items; }

    // return the sorted array from Low to High
    if (value == "Low to High") {
      return items.sort((a, b) => {
        return a.price - b.price;
      });
    }

    // return the sorted array from High to Low
    if (value == "High to Low") {
      return items.sort((a, b) => {
        return b.price - a.price;
      });
    }
    // return the sorted array from High to Low
    if (value == "A to Z") {
      return items.sort((a, b) => {
        let aTitle = a.title.toLowerCase()
        let bTitle = b.title.toLowerCase();

        if (aTitle < bTitle) {
          return -1;
        }
        if (aTitle > bTitle) {
          return 1;
        }
        return 0;
      });
    }

    // retrun the filtered array
    return items.sort((a, b) => {
      let aTitle = a.title.toLowerCase()
      let bTitle = b.title.toLowerCase();

      if (aTitle > bTitle) {
        return -1;
      }
      if (aTitle < bTitle) {
        return 1;
      }
      return 0;
    });
  }

}
