import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpServiceService } from 'src/services/http-service.service';
import { Currency } from '../table-view/table-view.component';
import {CardModule} from 'primeng/card';
@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurrencyCardComponent implements OnInit {

  currencyToDisplay: Currency;
  path:string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private httpService : HttpServiceService) { }

  ngOnInit(): void {
this.httpService.getItemById(this.route.snapshot.paramMap.get('id')).subscribe((response:any) =>{
  this.currencyToDisplay = response.data;

  console.log(response.data);
});

  }

  redirectToMarkets()
  {
    this.path = "/currency/";
    this.path += this.route.snapshot.paramMap.get('id');
    this.path += "/market";
    console.log(this.path);
    this.router.navigate([this.path]);
  }


}
