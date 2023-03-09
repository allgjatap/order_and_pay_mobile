import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], searchText: string): any {
    if (!list) return [];
    if (!searchText) return list;

    return list.filter((items) => {
      return items.categoryName.toLowerCase().includes(searchText);
    });
  }
}
