import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreModule,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { FieldValue } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseFunctionsService {
  userCollection: AngularFirestoreCollection;
  constructor(private dbstore: AngularFirestore, private router: Router) {
    this.userCollection = this.dbstore.collection('users');
  }

  fetchCategories(uniqueID: string) {}
  createCategory(
    categoryName: string,
    uniqueId: any,
    tasks: any,
    prescore: number,
    date: any,
    uid: string,
    expected: number
  ): void {
    //
    // tasks should be an array of dictionaries
    let value = {
      tasks: tasks.flat(),
      preScore: prescore,
      total: tasks.flat().length,
      completed: 0,
    };
    let ref = this.userCollection.doc(uniqueId);
    ref
      .collection('categories')
      .doc(categoryName)
      .set({
        tasks: tasks.flat(),
        preScore: prescore,
        total: tasks.flat().length,
        expected: expected,
        completed: 0,
      })
      .then((t) => {
        ref
          .set({
            timeAdded: date,
            timeEnded: date,
            userID: uid,
            DocId: uniqueId,
          })
          .then((val) => {
            this.router.navigate(['/category', categoryName]);
            // this.router.
          })
          .catch((er) => {
            console.log(er);
          });
      })
      .catch((er) => {
        console.log(er);
      });
  }
  completeTask(
    categoryName: string,
    completedTotal: any,
    uid: string,
    newValues: any,
  ) {
    this.userCollection
      .doc(uid)
      .collection('categories')
      .doc(categoryName)
      .update({ completed: completedTotal, tasks: newValues })
      .then((val) => {
        console.log('task updated ');
        // this.router.
      })
      .catch((er) => {
        console.log(er);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  async fetchTasks(userId: any, categoryName: any) {
    return await this.userCollection
      .doc(userId)
      .collection('categories')
      .doc(categoryName)
      .get()
      .toPromise()
      .then((querySnapshot) => {
        return querySnapshot?.data();
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
      });
  }

  updateTask(
    categoryName: string,
    uniqueId: any,
    tasks: any,
  ): void {
    let value = { tasks: [...tasks] };
    this.userCollection
      .doc(uniqueId)
      .collection('categories')
      .doc(categoryName)
      .set(value)
      .then((t) => {
        console.log(value);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  signUp(email:string, password:any){
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed up
    var user = userCredential.user;
    this.router.navigate(["/category"]);
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
    this.router.navigate(["/dashboard"]);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
}
