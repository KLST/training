import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule   } from '@angular/router';
  
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { CenterComponent } from './center/center.component';
import { LeftComponent } from './left/left.component';
import {SaleService} from './sale.service';
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
    RouterModule.forRoot( [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home',component:HomeComponent},
      {path:'Top',component:TopComponent},
      {path:'aboutus',component:CenterComponent},
      {path:'contactus',component:LeftComponent},
       
      ]  )
  ],
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
