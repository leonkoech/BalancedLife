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

    })}
    });
  }
 
}
