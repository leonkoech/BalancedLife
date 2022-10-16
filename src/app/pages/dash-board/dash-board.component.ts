import { Component, OnInit } from '@angular/core';
import { DataGuardService } from 'src/app/services/data-guard.service';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  categories:string[] = []
  userId: string = ""
  chartData: chartData[] = [];
  ids:any = [
   {id:"Utxk4R4gMig1t8iQ6UEp36nt3NW2", month: "09/04/2022 - 09/11/2022"},
    {id: "hLcxM3DCOaRexutHCwLsYTwnz1C3", month: "09/11/2022 - 09/18/2022"},
    {id: "q3u3XOA1mZhTvSyJb5HWxEYWycN2", month: "09/18/2022 - 09/23/2022"}
  ]
  constructor(
    public firebaseService: FirebaseFunctionsService,
    private user: DataGuardService
  ) { }

  ngOnInit(): void {
    this.getAllDocs()
  }
  async getAllDocs() {
    await firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        this.userId = user.uid
        const snapshot = await firebase.firestore().collection('users').doc(user.uid).collection("categories").get()
     snapshot.docs.map((doc) =>{

      this.categories.push(doc.id)
      console.log(doc.data())
      
        let val = {
          name:doc.id,
          ideal: doc.data()['expected'],
          current: doc.data()['preScore']
        }
        this.chartData.push(val)
    })}
    });
  }
 
}
class chartData{
  name: string = "";
  ideal: number = -1;
  current: number = -1;
}
