import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { VehicleService } from './service/vehicle.service';
 import{ ProductComponent} from './pages/product/product.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
 
  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
   ProductComponent,
   LeftComponent,
   CenterComponent,
 
 
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    HttpClientModule,
    RouterModule.forRoot( [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home',component:HomeComponent},
      { path:'product/:type', component: ProductComponent },
 
      // {path:'cars',component:CarsComponent},
      // {path:'bikes',component:BikesComponent}
        
      ]  )
  ],
  
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
