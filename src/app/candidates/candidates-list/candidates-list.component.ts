import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { CandidatesDataSource } from '../candidates-data-source';
import { ContestService } from '../../contests/contest.service';

import { Candidate } from '../candidate';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  id: string; // contest ID
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<CandidatesItem>;
  dataSource: CandidatesDataSource;
  selection: SelectionModel<Candidate>;
  displayedColumns = ['id', 'name', "party"];

  constructor(
    private route: ActivatedRoute, 
    private contestService: ContestService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('c_id');
    this.selection = new SelectionModel<Candidate>(true, []);
    this.dataSource = new CandidatesDataSource(this.contestService);
    this.dataSource.loadContestCandidates(this.id);
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
