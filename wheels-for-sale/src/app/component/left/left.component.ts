import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  values = [
    {name:"Company "},
    {  name: "Tata" },
    {  name: "Mahindra" },
    {  name: "Ford" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
