import { Component, OnInit ,Input } from '@angular/core';
 

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  @Input() imgData:any;
  
  constructor() { }

  ngOnInit() {
    
  }

}
