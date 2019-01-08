import{Router} from '@angular/router';
import { Component,OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { VehicleService } from 'src/app/service/vehicle.service';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
    modal:any=[];
    vehiclevalues:any=[];
    modelArray:any = [];
    imageArray:any=[];
  
    constructor(private route:ActivatedRoute,public vehicleService: VehicleService,
      private router:Router)
     {   this.route.params.subscribe( (params) => {

      console.log(params)
      this.fetchfilter(params.type,"")
     }); 
      } 
    ngOnInit() {
      
    }
    
    fetchfilter(type,mname){
      this. vehiclevalues=[];
      this.modelArray=[];
      this.modal=[];
      this.vehicleService.fetchVehicels(type,mname).subscribe((res:any) =>{
      console.log(res);
      this. vehiclevalues=res.value
      let unique_array = [] 
        for(let i = 0;i <res.value.length; i++)
        { if(unique_array.indexOf(res.value[i].f3p1) == -1)
          { 
            unique_array.push(res.value[i].f3p1);
            this.modal.push(res.value[i]);
           
           } 
        } 
        return unique_array  
     
      });
      }  
  
stored(val){
    this.modelArray=[];
     console.log(this.vehiclevalues)
    for (var i = 0; i < this.vehiclevalues.length; i++) 
    { 
       if(this.vehiclevalues[i].f3p1==val){                        
         console.log(this.vehiclevalues[i])
          this.modelArray.push({'modal':this.vehiclevalues[i].ldde ,'specfi':this.vehiclevalues[i].OData__x006e_ih5,'image':this.vehiclevalues[i].oc6c});
       }
     }
   }
    
    speciimage(data){
      this.imageArray=data;
      console.log(data)
      
          }
}
  