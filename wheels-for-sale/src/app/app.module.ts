import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { CenterComponent } from './center/center.component';
import { LeftComponent } from './left/left.component';
import {SaleService} from './sale.service';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CenterComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgModule
  ],
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
