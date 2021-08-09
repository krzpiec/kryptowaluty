import { Component, Input, OnInit } from '@angular/core';
import { Currency } from '../table-view/table-view.component';


@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.scss']
})
export class CurrencyViewComponent implements OnInit {

  @Input()
  choosedCurrency:Currency;

  
  constructor() { }

  ngOnInit(): void {
  }

}
