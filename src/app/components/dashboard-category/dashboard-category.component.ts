import { Component, OnInit } from '@angular/core';
import { DataGuardService } from 'src/app/services/data-guard.service';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit {

  clicked:boolean= true;
  categoryName: string="friends"
  categoryData: any
  // data to be received should be 
  // name:
  // completed:
  // total:
  // tasks:
  tasks: taskModel[]=[];
  constructor(
    public firebaseService: FirebaseFunctionsService,
     private user: DataGuardService,
  ) { 
   
  }

  ngOnInit(): void {
        this.fetchTaskData()
    
  
  }
  onChange(val:any, event: any){
    // updata data in firebase
    console.log(val)
  }
  async fetchTaskData(){
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
  let cat = await this.firebaseService.fetchTasks(user.uid,this.categoryName);
    this.categoryData = cat
    console.log(cat)

      }})
  
    
  }

}
class taskModel {
  checked: boolean = false;
  name: string = '';
  notes: string=''
}