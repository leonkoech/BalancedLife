import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class DataGuardService {
  uid = ""
  constructor() { 
    this.getUser()
  }
   getUser(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid;
        console.log(user.uid) 
        // ...
      } else {
        // User is signed out
        console.log("no bueno")
        // ...
      }
    });
  } 
}
