
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TableModule }  from 'primeng/table';
import { Currency } from '../table-view/table-view.component';

@Component({
  selector: 'app-show-currency-data',
  templateUrl: './show-currency-data.component.html',
  styleUrls: ['./show-currency-data.component.scss'],
  providers : []
})
export class ShowCurrencyDataComponent implements OnInit {

  cols: any[] =[
  {header:'Nazwa', field:'id'},
  {header:'Cena', field:'priceUsd'},
  {header:'Zmiana', field:'changePercent24Hr'},
  {header:'Szczegoly', field:'szczegoly'},];

  @Input()
  currencyData: Array<Currency> = [];

  @Input()
  currencyToFind: string ='';

  selectedCurrency!: Currency;

  constructor(private route: ActivatedRoute,
    private router: Router) {
   }


  ngOnInit(): void {
  }


  rowSelected(event:any)
  {
    console.log(this.selectedCurrency);
    this.router.navigate(['/currency', this.selectedCurrency.id]);
  }
  onRowUnselect(event:any)
  {}
}
