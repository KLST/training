import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
 


@Injectable()
export class SaleService {

  constructor(public http: HttpClient) {
    
   }
   getservicemethod(){
    let url:string = "https://kltech1.sharepoint.com/sites/annotate101/Test/_api/Web/Lists/GetByTitle(' ')/items ";
    
   return this.http.get(url)
  }

}
