import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {
// @Input() categoryName: string=""
@Input() chartData: any=""
  constructor() { }

  ngOnInit(): void {
    console.log(this.chartData)
  }

}
