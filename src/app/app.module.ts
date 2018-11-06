import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CandleStickComponent } from './candle-stick/candle-stick.component';
import { ChartModule } from 'angular-highcharts';
import { HttpModule, JsonpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
// import {CandleStickModule} from './candle-stick/candle-stick.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
          path: '',  component: CandleStickComponent,
      },
     
];
@NgModule({
  declarations: [
    AppComponent,
    CandleStickComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    NgbModule.forRoot(),
    BsDropdownModule,
    RouterModule.forRoot(
      routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
