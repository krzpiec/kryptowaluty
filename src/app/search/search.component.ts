
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Currency } from '../table-view/table-view.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  inputText: string = "Wpisz nazwe";

  @Input()
  currencyData: Array<Currency> = [];

  @Output()
  currencyToFind = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  setValueForSearching(event: any){
    this.inputText = event.target.value;
    console.log(this.inputText);
  }

  passCurrencyNameToFind(currencyName: string) {
    console.log('searchComponent', currencyName);
    this.currencyToFind.emit(currencyName);
  }
}
