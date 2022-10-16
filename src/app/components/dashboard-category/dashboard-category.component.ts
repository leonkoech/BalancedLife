import { Component, Input, OnInit } from "@angular/core";
import { FirebaseFunctionsService } from "src/app/services/firebase-functions.service";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { TemplateBindingParseResult } from "@angular/compiler";

@Component({
  selector: "app-dashboard-category",
  templateUrl: "./dashboard-category.component.html",
  styleUrls: ["./dashboard-category.component.scss"]
})
export class DashboardCategoryComponent implements OnInit {
  clicked: boolean = true;
  @Input() categoryName: string = "";
  @Input() uid: string = "";
  categoryData: any;
  tasks: taskModel[] = [];
  constructor(public firebaseService: FirebaseFunctionsService) {}

  ngOnInit(): void {
    this.fetchTaskData();
  }
   onChange(val: any, event: any) {
    if(val.checked){
      val.checked = false
    let index = this.categoryData['tasks'].indexOf(val)
    val.checked  = true
    this.categoryData['tasks'][index] = val
    this.categoryData.completed ++
    }
    else{
      this.categoryData.completed --
    }
    // await this.firebaseService.completeTask(this.categoryName,this.categoryData.completed,this.uid,this.categoryData)
  }
  async fetchTaskData() {
    let cat = await this.firebaseService.fetchTasks(
      this.uid,
      this.categoryName
    );
    console.log(cat!['tasks'])
    this.categoryData = cat;
  }
  checkbox(name:any){
    
  }
}
class taskModel {
  checked: boolean = false;
  name: string = "";
  notes: string = "";
}
