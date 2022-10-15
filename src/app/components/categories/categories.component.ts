import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';
import {FormBuilder} from '@angular/forms';
import { DataGuardService } from 'src/app/services/data-guard.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryName = "friends"
  rating = -1;
  customTask = ""
  tasks: any;
  userId: any;
  
  finalVal: taskRecommendation[] = []
  tasksCustom: taskRecommendation[] = []

  tasksRecomendations: taskRecommendation[] = [
    {
      checked: false,
      name: 'abdasdbas',
      notes: '',
    },
    {
      checked: false,
      name: 'sadasdhf',
      notes: ''
    },
    {
      checked: false,
      name: 'asdasdasd',
      notes: ''
    },
    {
      checked: false,
      name: 'asdasdasda',
      notes: ''
    }
  ]
  

  constructor(
    public test: FirebaseFunctionsService,
     private user: DataGuardService,
  ) { }

  ngOnInit(): void {
    
    this.userId  =  this.user.uid
    
  }
  setRate(val: number){
    this.rating = val
  }
  
  onChange(val:any, event: any){
    if(val.checked){
     let uploadVal = val
      uploadVal.checked = false
      this.finalVal.push(uploadVal);
    }
    
  }
  submitCustomTask(val:string){

    let taskValue: taskRecommendation = {
      name: val,
      checked: false,
      notes: ""
    } 
    this.tasksRecomendations.push(taskValue)
    this.tasksCustom.push(taskValue)
    this.customTask = ""

  }



  async submitCategeory(){
    if(this.rating>-1){
      let value = {
            tasks: this.finalVal,
            preScore: this.rating
          }
          console.log(value)
          console.log(this.user.uid)
          // let tt = await this.test.fetchTasks(this.user.uid,this.categoryName);
          // console.log(tt)
this.test.createCategory(this.categoryName,this.user.uid,[value.tasks],value.preScore,Date.now(),this.user.uid);
    }
    else{
      alert("please rate your area")
    }
   
  }
}

class taskRecommendation {
  checked: boolean = false;
  name: string = '';
  notes: string=''
}