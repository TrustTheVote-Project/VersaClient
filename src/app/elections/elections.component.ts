import { Component, OnInit } from '@angular/core';
import { ElectionDataSource } from '../election-data-source';
import { ElectionService } from '../election.service';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})
export class ElectionsComponent implements OnInit {
  dataSource: ElectionDataSource;
  columnsToDisplay: string[] = ['id', 'name', 'district', 'dates'];

  constructor(private electionService: ElectionService) { }

  ngOnInit(): void {
    this.dataSource = new ElectionDataSource(this.electionService);
    this.dataSource.loadElections();
  }

  onRowClicked(): void {
    // TODO: route to election page 
    console.log('row clicked');
    return;
  }

}
