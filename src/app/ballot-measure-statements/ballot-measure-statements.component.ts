import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BallotMeasureStatementsDataSource } from './ballot-measure-statements-datasource';

@Component({
  selector: 'app-ballot-measure-statements',
  templateUrl: './ballot-measure-statements.component.html',
  styleUrls: ['./ballot-measure-statements.component.css']
})
export class BallotMeasureStatementsComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<BallotMeasureStatementsItem>;
  dataSource: BallotMeasureStatementsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new BallotMeasureStatementsDataSource();
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
}
