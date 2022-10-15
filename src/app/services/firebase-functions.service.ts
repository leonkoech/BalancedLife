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
   createCategory( categoryName:string, uniqueId: any, tasks: any, prescore: number, date: any, uid: string):void {
    //
    // tasks should be an array of dictionaries
    let value  = {tasks:tasks.flat(), preScore:prescore}
    let ref = this.userCollection.doc(uniqueId)
    ref.collection("categories").doc(categoryName).set(value).then((t) => {
      ref.set({timeAdded: date, timeEnded: date, userID: uid, DocId: uniqueId}).then((val)=>{
        console.log(value)
        // this.router.
      }).catch((er)=>{
        console.log(er)
      })
     
    }).catch((er) =>{
       console.log(er)
    });

  }
  
  fetchTasks(uniqueId: any,categoryName: any){
  // data to be received should be 
  // name:
  // completed:
  // total:
  // tasks:
  // this function fetches data on specific 
   let completedTasks = 0;
    let totalTasks=0;
  this.userCollection.doc(uniqueId).collection("categories").doc(categoryName).get().toPromise().then((querySnapshot)=> {
    console.log(querySnapshot?.get);
   console.log(querySnapshot?.data)
})
.catch(function(error) {
    console.log("Error getting documents: ", error);

})

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
