import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electoral-district',
  templateUrl: './electoral-district.component.html',
  styleUrls: ['./electoral-district.component.css']
})

export class ElectoralDistrictComponent implements OnInit {
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
