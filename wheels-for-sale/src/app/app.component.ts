import { Component } from '@angular/core';
import{Router} from '@angular/router';
import {SaleService} from './service/sale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listvalues:any;
 

constructor( public saleService: SaleService){
this.getmethod();
  
}




getmethod(){
this.saleService.getservicemethod().subscribe((res:any) =>{
console.log(res);
this.listvalues = res.value;
console.log(this.listvalues)
console.log(this.listvalues[4].Id )
});
} 
 
 
}
