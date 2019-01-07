import{Router} from '@angular/router';
import { Component,OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { VehicleService } from 'src/app/service/vehicle.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    modal:any=[];
    vehiclevalues:any=[];
    
    modelArray:any = [];
    imageArray:any=[];
  
    constructor(private route:ActivatedRoute,public vehicleService: VehicleService)
     {   this.route.params.subscribe( (params) => {

      console.log(params)
 
     }); 
      } 
    ngOnInit() {
     
    } 
     
         

}
  