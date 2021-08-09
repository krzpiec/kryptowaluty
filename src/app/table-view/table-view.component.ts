import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {


  currencyToFind:string ='';

  data: Array<Currency> = [];
  
  constructor (private httpService : HttpServiceService){

  }

  ngOnInit(): void {
  }

 

  getPosts(){
    this.httpService.getPosts().subscribe((response:any) =>{
      this.data = response.data;
      console.log('getPosts');
     // console.log(response.data);
    });
    //console.log(this.data.length);
  }


  findCurrency(currencyName: string)
  {
    this.currencyToFind = currencyName;
  }
}
export interface Currency{
  id?: string ;
  rank?: number;
  symbol?: string;
  name?: string;
  supply?: number;
  maxSupply?: number;
  marketCapUsd?: number;
  volumeUsd24Hr?: number;
  priceUsd?: number;
  changePercent24Hr?: number;
  vwap24Hr?: number;
}