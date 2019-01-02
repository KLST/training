import { VehicleService } from 'src/app/service/vehicle.service';
import { Component } from '@angular/core';
 


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
  title = 'sharepoint';
  listvalues:any;
  carvalues:any;
  bikevalues:any;
  bikemodelArray:any = [];
  imageArray:any=[];
  

constructor( public vehicleService: VehicleService){
this.getmethod();
 this.fetchfilterbike();
 
}

getmethod(){
this.vehicleService.fetchlist().subscribe((res:any) =>{
console.log(res);
this.listvalues = res.value;
console.log(this.listvalues)
console.log(this.listvalues[0].Id )
});
} 
fetchfilterbike1(val){
 this.bikemodelArray=[];
  console.log(val);
  console.log(this.bikevalues)
  
  for (var i = 0; i < this.bikevalues.length; i++) { 
    if(this.bikevalues[i].f3p1==val){
      console.log(this.bikevalues[i])
       this.bikemodelArray.push({'modal':this.bikevalues[i].ldde ,'specfi':this.bikevalues[i].OData__x006e_ih5,'image':this.bikevalues[i].oc6c});
    }
  }
}
fetchfilterbike(){
//console.log(val);
this.vehicleService.filterbike().subscribe((res:any) =>{
console.log(res);
this.bikevalues = res.value;
console.log(this.bikevalues)
console.log(this.bikevalues[4].oc6c )

});
}
 
speciimage(data){
  this.imageArray=data;
  console.log(data)
}
   
 
 
}
