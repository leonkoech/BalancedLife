import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { RadarChart } from 'radarchart-node';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {
   // Radar
   @Input() charData:any=[];
   title = 'ng2-charts-demo';

   public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
     responsive: true,
   };
   public radarChartLabels: string[] = [];
   public idealData: number[]=[];
   public currentData: number[]=[];
   public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: this.charData.map((val:any)=>{return val.ideal}), label: 'Ideal' },
    { data: this.charData.map((val:any)=>{return val.current}), label: 'Current' }
  ];
  constructor(
    public firebaseService: FirebaseFunctionsService
  ) { 

  }

  ngOnInit(): void {
    console.log(this.charData.map((val:any)=>{return val.ideal}))

    this.getAllDocs()
  }
  async getAllDocs() {
    await firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const snapshot = await firebase.firestore().collection('users').doc(user.uid).collection("categories").get()
     snapshot.docs.map((doc) =>{

      this.radarChartLabels.push(doc.id)
      this.radarChartDatasets[0].data.push(doc.data()['expected'])
      this.radarChartDatasets[1].data.push(doc.data()['preScore'])
      this.fetchTaskData(user.uid,doc.id)
      // console.log("test")
    })
  }
    });
    // this.radarChartDatasets= [
    //   { data: this.idealData, label: 'Ideal' },
    //   { data: this.currentData, label: 'Current' }
    // ];
}
async fetchTaskData(uid:any,categoryName:any) {
  let cat = await this.firebaseService.fetchTasks(
    uid,
    categoryName
  );
  console.log(this.idealData)
  this.idealData.push(cat!['expected'])
  this.currentData.push(cat!['preScore'])
  return cat;
}
}
