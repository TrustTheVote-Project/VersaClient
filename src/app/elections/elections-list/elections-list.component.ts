import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { ElectionDataSource } from '../election-data-source';
import { ElectionService } from '../election.service';

import { Election } from '../election'
;
@Component({
  selector: 'app-elections-list',
  templateUrl: './elections-list.component.html',
  styleUrls: ['./elections-list.component.css']
})
export class ElectionsListComponent implements OnInit {
  dataSource: ElectionDataSource;
  selection: SelectionModel<Election>;
  columnsToDisplay: string[] = ['select', 'id', 'name', 'type', 'start_date', 'end_date', 'status'];

  constructor(private electionService: ElectionService) { }

  ngOnInit(): void {
    this.selection = new SelectionModel<Election>(true, []);
    this.dataSource = new ElectionDataSource(this.electionService);
    this.dataSource.loadElections();
  }

  currentStatus(election):string {
    const today = new Date();
    const start_date = new Date(election.start_date);
    const end_date = new Date(election.end_date);

    if (start_date <= today && today <= end_date) {
      return "running";
    } else if (start_date > today) {
      return "not yet started";
    } else if (today > end_date) {
      return "over";
    }
  }

  isAnySelected() {
    return this.selection.selected.length > 0; 
  }

  // masterToggle() {
  //   this.isAnySelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  // }




}
