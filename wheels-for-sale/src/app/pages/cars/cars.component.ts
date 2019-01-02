import { VehicleService } from 'src/app/service/vehicle.service';
import { Component } from '@angular/core';
 


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  title = 'sharepoint';
  listvalues:any;
  carvalues:any;
  bikevalues:any;
  carmodelArray:any = [];
  imageArray:any=[];
  carmodal:any=[];

constructor( public vehicleService: VehicleService){
 
this.fetchfiltercar(); 
 
}
 
 
fetchfiltercar1(val){
  this.carmodelArray=[];
   console.log(val);
   console.log(this.carvalues)
   
   for (var i = 0; i < this.carvalues.length; i++) { 
     if(this.carvalues[i].f3p1==val){
       console.log(this.carvalues[i])
        this.carmodelArray.push({'modal':this.carvalues[i].ldde ,'specfi':this.carvalues[i].OData__x006e_ih5,'image':this.carvalues[i].oc6c});
     }
   }
 }

  
  speciimage(data){
    this.imageArray=data;
    console.log(data)
  
  }
  fetchfiltercar(){
    this.vehicleService.filtercar().subscribe((res:any) =>{
    console.log(res);
    this.carvalues=res.value
    let unique_array = [] 
      for(let i = 0;i <res.value.length; i++)
      { if(unique_array.indexOf(res.value[i].f3p1) == -1)
        { 
          unique_array.push(res.value[i].f3p1);
          this.carmodal.push(res.value[i]);
         
         } 
      } 
      return unique_array  
   
    
    });
    }  
 
}


 

 
 

 
 
 