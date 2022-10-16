import { Component, Input, OnInit } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FirebaseFunctionsService } from "src/app/services/firebase-functions.service";
import { FormBuilder } from "@angular/forms";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { DataGuardService } from "src/app/services/data-guard.service";
import { suggestions } from "src/static/balanced_json";
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  @Input() catName: string = "";

  recs = suggestions
  categoryName = this.catName;
  rating = -1;
  ideal = 5 ;
  customTask = "";
  tasks: any;
  userId: any;

  finalVal: taskRecommendation[] = [];
  tasksCustom: taskRecommendation[] = [];


  tasksRecomendations: taskRecommendation[] = []
   

  constructor(
    public test: FirebaseFunctionsService,
    private user: DataGuardService,
    public firebaseService: FirebaseFunctionsService
  ) {}

  ngOnInit(): void {
    this.recs[this.catName as  keyof typeof this.recs].map((item)=>{
      let val= {
        checked: false,
        name: item,
        notes: ""
      }
      this.tasksRecomendations.push(val)
    });
    this.userId = this.user.uid;
  }
  setRate(val: number) {
    this.rating = val;
  }
  setIdeal(val: number){
    this.ideal = val;
  }

  onChange(val: any, event: any) {
    if (val.checked) {
      let uploadVal = val;
      uploadVal.checked = false;
      this.finalVal.push(uploadVal);
    }
  }
  submitCustomTask(val: string) {
    let taskValue: taskRecommendation = {
      name: val,
      checked: false,
      notes: ""
    };
    this.tasksRecomendations.push(taskValue);
    this.tasksCustom.push(taskValue);
    this.customTask = "";
  }

  async submitCategeory() {
    if (this.rating > -1) {
      let value = {
        tasks: this.finalVal,
        preScore: this.rating
      };
      // let tt = await this.test.fetchTasks(this.user.uid,this.categoryName);
      // console.log(tt)
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          await this.test.createCategory(
            this.catName,
            user.uid,
            [value.tasks],
            value.preScore,
            Date.now(),
            user.uid,
            this.ideal
          );
        }
      });
    } else {
      alert("please rate your area");
    }
  }
}

class taskRecommendation {
  checked: boolean = false;
  name: string = "";
  notes: string = "";
}
