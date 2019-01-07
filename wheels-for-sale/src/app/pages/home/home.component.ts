import{Router} from '@angular/router';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  public cars(product):void{
    
    this.router.navigate(['/product/car']);
  }
  public bikes(product):void{
    this.router.navigate(['/product/bike']);
  }
  
 
 

}
