import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    return value.sort(function (a, b) {
    if (new Date(a.snippet.publishedAt) > new Date(b.snippet.publishedAt)) {
      return 1;
    }
    if (new Date(a.snippet.publishedAt) < new Date(b.snippet.publishedAt)) {
      return -1;
    }
    return 0;

})
  }

}
// snippet.publishedAt
// new Date(b.snippet.publishedAt)
