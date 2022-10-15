import { Component, Input, OnInit } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FirebaseFunctionsService } from "src/app/services/firebase-functions.service";
import { FormBuilder } from "@angular/forms";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { DataGuardService } from "src/app/services/data-guard.service";
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  @Input() catName: string = "";

  categoryName = this.catName;
  rating = -1;
  ideal = 5;
  customTask = "";
  tasks: any;
  userId: any;

  finalVal: taskRecommendation[] = [];
  tasksCustom: taskRecommendation[] = [];

  tasksRecomendations: taskRecommendation[] = [
    {
      checked: false,
      name: "abdasdbas",
      notes: ""
    },
    {
      checked: false,
      name: "sadasdhf",
      notes: ""
    },
    {
      checked: false,
      name: "asdasdasd",
      notes: ""
    },
    {
      checked: false,
      name: "asdasdasda",
      notes: ""
    }
  ];

  constructor(
    public test: FirebaseFunctionsService,
    private user: DataGuardService,
    public firebaseService: FirebaseFunctionsService
  ) {}

  ngOnInit(): void {
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
      console.log(value);
      console.log(this.user.uid);
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
