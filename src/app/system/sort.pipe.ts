import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform 
{

  transform(objArr: any[], column: string, order: string = 'asc'): any[] 
  {
    if(typeof objArr == "undefined") return;
    return objArr.sort(compareFn);

    function compareFn(left: any, right: any)
    {
      let l: string = left[column].toLowerCase();
      let r: string = right[column].toLowerCase();

      if(l===r) return 0;
      if(order === 'asc' )
        return l > r ? 1 : -1;
      else
        return l < r ? 1 : -1  
    };
  }

}
