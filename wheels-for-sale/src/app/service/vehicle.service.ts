 import { Injectable } from '@angular/core';
  import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {
  
  public siteUrl = "https://kltech1.sharepoint.com/sites/annotate101/Test/_api/Web/Lists/"
  constructor(public http: HttpClient){
}
fetchVehicels(type:any, mName:any) {
let filter = '';
if(type!='all'){
filter = `$filter=vsmh eq '${type}'`
}
if(mName!=''){
filter = (filter!='') ? `?$filter=${filter} and  f3p1 eq '${mName}'` : `?$filter=f3p1 eq '${mName}'`
}
let url: string = `${this.siteUrl}GetByTitle('VehicleForSale')/items?${filter}`;
return this.http.get(url)
}

} 
  
 

 