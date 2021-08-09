import { TableModule } from 'primeng/table';
import { HttpServiceService } from './../services/http-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowCurrencyDataComponent } from './show-currency-data/show-currency-data.component';
import { SearchComponent } from './search/search.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowCurrencyDataComponent,
    SearchComponent,
    SearchFilterPipe,
    routingComponents,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
