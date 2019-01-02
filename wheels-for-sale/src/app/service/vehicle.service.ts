 import { Injectable } from '@angular/core';
 

 import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {
  public siteUrl = "https://kltech1.sharepoint.com/sites/annotate101/Test/_api/Web/Lists/"
  constructor(public http: HttpClient){
}


fetchlist(){
  let url: string =  `${this.siteUrl}GetByTitle('VehicleForSale')/items`; 
 return this.http.get(url)
}

filterbike(){
  let url: string =  `${this.siteUrl}GetByTitle('VehicleForSale')/items?&$filter=vsmh eq 'bike'`;
 return this.http.get(url)
}
filtercar(){
  let url: string =  `${this.siteUrl}GetByTitle('VehicleForSale')/items?&$filter=vsmh eq 'car'`;
 return this.http.get(url)
}


}