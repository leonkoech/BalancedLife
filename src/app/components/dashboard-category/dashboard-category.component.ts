import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit {

  clicked:boolean= true;
  // data to be received should be 
  // name:
  // completed:
  // total:
  // tasks:
  tasks: taskRecommendation[] = [
    //populate with unchecked firebase items
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
  constructor() { }

  ngOnInit(): void {
  }
  onChange(val:any, event: any){
    // updata data in firebase
    console.log(val)
  }

}
class taskRecommendation {
  checked: boolean = false;
  name: string = '';
  notes: string=''
}