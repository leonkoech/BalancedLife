import { Component, Input, OnInit } from "@angular/core";
import { FirebaseFunctionsService } from "src/app/services/firebase-functions.service";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
    console.log(val);
  }
  async fetchTaskData() {
    let cat = await this.firebaseService.fetchTasks(
      this.uid,
      this.categoryName
    );
    this.categoryData = cat;
  }
}
class taskModel {
  checked: boolean = false;
  name: string = "";
  notes: string = "";
}
