import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseFunctionsService {
  userCollection: AngularFirestoreCollection;
  constructor(private dbstore: AngularFirestore) {
    this.userCollection  = this.dbstore.collection('users');
   }

   fetchCategories(uniqueID: string){

   }
   createCategory( categoryName:string, uniqueId: any, tasks: any, prescore: number):void {
    //
    // tasks should be an array of dictionaries
    let value  = {tasks:[...tasks], preScore:prescore}
    this.userCollection.doc(uniqueId).collection("categories").doc(categoryName).set(value).then((t) => {
     console.log(value)
    }).catch((er) =>{
       console.log(er)
    });

  }

  updateTask( categoryName:string, uniqueId: any, tasks: any, prescore: number): void{
    let value  = {tasks:[...tasks], preScore:prescore}
    this.userCollection.doc(uniqueId).collection("categories").doc(categoryName).set(value).then((t) => {
     console.log(value)
    }).catch((er) =>{
       console.log(er)
    });
  }

  signUp(email:string, password:any){
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  }

  signIn(email:string, password:any){
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
}
