import { HttpServiceService } from 'src/services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private httpService : HttpServiceService) { }

  path:string;
  marketTable: Marketplace[] = [];
  cols: any[] =[
    {header:'Market', field:'exchangeId'},
    {header:'Wymien na', field:'quoteId'},
    {header:'Cena', field:'priceUsd'},];

  ngOnInit(): void {
    this.httpService.getMarketPlace(this.route.snapshot.paramMap.get('id')).subscribe((response:any) =>{
      this.marketTable = response.data;
    });

  }

  goBackOnClick(){
    this.path = "/currency/";
    this.path += this.route.snapshot.paramMap.get('id');
    this.router.navigate([this.path]);
  }

}

export interface Marketplace{
  exchangeId?:string,
  baseId?:string,
  quoteId?: string,
  baseSymbol?: string,
  quoteSymbol?: string,
  volumeUsd24Hr?: string,
  priceUsd?: string,
  volumePercent?:string
}
