
import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from './table-view/table-view.component';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(currencyData: Currency[], currencyToFind: string): Array<Currency> {
    if (!currencyData || !currencyToFind)
      return currencyData;

      //console.log();
  return currencyData.filter(data =>
    data?.name?.toLocaleLowerCase().includes(currencyToFind.toLocaleLowerCase())
  );
  }
}
