import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { RadarChart } from 'radarchart-node';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
   public radarChartLabels: string[] = [];
 
   public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
     { data: [65, 59, 90, 81, 56, 55], label: 'Ideal' },
     { data: [28, 48, 40, 19, 96, 27], label: 'Current' }
   ];
  constructor() { 

  }

  ngOnInit(): void {
    this.getAllDocs()
  }
  async getAllDocs() {
    await firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const snapshot = await firebase.firestore().collection('users').doc(user.uid).collection("categories").get()
     snapshot.docs.map((doc) =>{
      this.radarChartLabels.push(doc.id)
    })}
    });
}
}
