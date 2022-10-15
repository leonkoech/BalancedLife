import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  rating = -1;
  customTask = ""
  tasks: any;
  
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
     private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.test.createCategory("test","test",[{name: "just", completed: false, notes: "test"}],4);
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

  submitCategeory(){
    if(this.rating>-1){
      let value = {
            tasks: this.finalVal,
            preScore: this.rating
          }
          console.log(value)
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