import { MarketsComponent } from './markets/markets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { CurrencyViewComponent } from './currency-view/currency-view.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  {path: '', component: TableViewComponent},
  {path: 'currencyview' , component: CurrencyViewComponent},
  {path: 'currency/:id', component: CurrencyCardComponent},
  {path: 'currency/:id/market', component: MarketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CurrencyViewComponent, TableViewComponent, CurrencyCardComponent, MarketsComponent];
