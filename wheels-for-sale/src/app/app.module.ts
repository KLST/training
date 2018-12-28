import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule   } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
  
import { AppComponent } from './app.component';
import { TopComponent } from './component/top/top.component';
import { CenterComponent } from './component/center/center.component';
import { LeftComponent } from './component/left/left.component';
import {SaleService} from './service/sale.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CenterComponent,
    LeftComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot( [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home',component:HomeComponent},
      {path:'product/:type',component:CenterComponent},       
      ]  )
  ],
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
