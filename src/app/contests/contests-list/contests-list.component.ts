// This component shows a table of contests

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

import { ContestDataSource } from '../contest-data-source';
import { ElectionService } from '../../elections/election.service';

import { Contest } from '../contest';

@Component({
  selector: 'app-contests-list',
  templateUrl: './contests-list.component.html',
  styleUrls: ['./contests-list.component.css']
})
export class ContestsListComponent implements OnInit {
  id: string;

  dataSource: ContestDataSource;
  selection: SelectionModel<Contest>
  displayedColumns = ['select', 'id', 'name', 'district', 'type'];

  constructor(
    private route: ActivatedRoute,
    private electionService: ElectionService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selection = new SelectionModel<Contest>(true, []);
    this.dataSource = new ContestDataSource(this.electionService);
    this.dataSource.loadElectionContests(this.id);
  }

  isAnySelected() {
    return this.selection.selected.length > 0;
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
}
