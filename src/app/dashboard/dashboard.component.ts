import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  district = {
    id: '1', 
    name: 'Gadget County'
  };
  
 

  constructor() { }

  ngOnInit(): void {
    this.getDistrict();

  }

  getDistrict(): void {
    // TODO: Get main dashboard info 
    console.log('get initial district info');
  }




}
