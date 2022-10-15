import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { RadarChart } from 'radarchart-node';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {
   // Radar
   title = 'ng2-charts-demo';

   public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
     responsive: false,
   };
   public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
 
   public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
     { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
     { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
   ];
  constructor() { 

  }

  ngOnInit(): void {
  }

}
