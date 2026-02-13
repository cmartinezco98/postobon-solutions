import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'lib-table-check',
  imports: [MatTableModule, MatPaginatorModule, MatSlideToggleModule],
  templateUrl: './table-check.html',
  styleUrl: './table-check.scss',
})
export class TableCheck implements AfterViewInit {
  displayedColumns: string[] = ['zone', 'name_client', 'code_client', 'remission_code', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  code_client: number;
  zone: number;
  name_client: string;
  remission_code: string;
  status: boolean;
  validated: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { zone: 1, name_client: 'Hydrogen', code_client: 1.0079, remission_code: 'H', status: true, validated: true },
  { zone: 2, name_client: 'Helium', code_client: 4.0026, remission_code: 'He', status: true, validated: true },
  { zone: 3, name_client: 'Lithium', code_client: 6.941, remission_code: 'Li', status: true, validated: true },
  { zone: 4, name_client: 'Beryllium', code_client: 9.0122, remission_code: 'Be', status: false, validated: false },
  { zone: 5, name_client: 'Boron', code_client: 10.811, remission_code: 'B', status: false, validated: false },
  { zone: 6, name_client: 'Carbon', code_client: 12.0107, remission_code: 'C', status: false, validated: false },
  { zone: 7, name_client: 'Nitrogen', code_client: 14.0067, remission_code: 'N', status: false, validated: false },
  { zone: 8, name_client: 'Oxygen', code_client: 15.9994, remission_code: 'O', status: false, validated: false },
  { zone: 9, name_client: 'Fluorine', code_client: 18.9984, remission_code: 'F', status: false, validated: false },
  { zone: 10, name_client: 'Neon', code_client: 20.1797, remission_code: 'Ne', status: false, validated: false },
  { zone: 11, name_client: 'Sodium', code_client: 22.9897, remission_code: 'Na', status: false, validated: false },
  { zone: 13, name_client: 'Aluminum', code_client: 26.9815, remission_code: 'Al', status: false, validated: false },
  { zone: 14, name_client: 'Silicon', code_client: 28.0855, remission_code: 'Si', status: false, validated: false },
  { zone: 15, name_client: 'Phosphorus', code_client: 30.9738, remission_code: 'P', status: false, validated: false },
  { zone: 16, name_client: 'Sulfur', code_client: 32.065, remission_code: 'S', status: false, validated: false },
  { zone: 17, name_client: 'Chlorine', code_client: 35.453, remission_code: 'Cl', status: false, validated: false },
  { zone: 18, name_client: 'Argon', code_client: 39.948, remission_code: 'Ar', status: false, validated: false },
  { zone: 19, name_client: 'Potassium', code_client: 39.0983, remission_code: 'K', status: false, validated: false },
  { zone: 20, name_client: 'Calcium', code_client: 40.078, remission_code: 'Ca', status: false, validated: false },
];