import { Component, OnInit } from '@angular/core';
import { categories } from '../../../src/static/Categories';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
   test=categories
  constructor(private router: Router,private route: ActivatedRoute,private dbstore: AngularFirestore) { }
  visited: any = []
  moretest: any = []
  ngOnInit(): void {
    this.getAllDocs()
  }
   doNext(object:any){
    console.log(object.name)
  }
  goToRedirect(pagename:any, item:any){
   
    this.router.navigate([pagename, item]);
  }
  dashboard(){
    this.router.navigate(["/dashboard"]);
  }
  async getAllDocs() {
    await firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const snapshot = await firebase.firestore().collection('users').doc(user.uid).collection("categories").get()
     snapshot.docs.map((doc) =>{
      this.visited.push(doc.id)
    })}
    });
 
}
  

}

