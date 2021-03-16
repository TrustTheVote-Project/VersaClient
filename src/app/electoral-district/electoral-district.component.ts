import { Component, OnInit } from '@angular/core';
import { ElectionDataSource } from '../election-data-source';
import { ElectionService } from '../election.service';

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
  
  dataSource: ElectionDataSource;
  columnsToDisplay: string[] = ['id', 'name', 'district', 'dates'];

  constructor(private electionService: ElectionService) { }

  ngOnInit(): void {
    this.getDistrict();
    this.dataSource = new ElectionDataSource(this.electionService);
    this.dataSource.loadElections();
  }

  getDistrict(): void {
    // return this.district;
    console.log('get initial district info');
  }

  onRowClicked(): void {
    // TODO: route to election page 
    console.log('row clicked');
    return;
  }



}
