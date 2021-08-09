import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpServiceService } from 'src/services/http-service.service';
import { Currency } from '../table-view/table-view.component';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  currencyToDisplay: Currency;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private httpService : HttpServiceService) { }

  ngOnInit(): void {
console.log('zaczynamy');
this.httpService.getItemById(this.route.snapshot.paramMap.get('id')).subscribe((response:any) =>{
  this.currencyToDisplay = response.data;
  
  console.log(response.data);
});
//console.log(this.httpService.getItemById(this.route.snapshot.paramMap.get('id')));
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.httpService.getItemById(params.get('id')!))
    // );

  }

}
