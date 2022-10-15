import { Component, OnInit } from '@angular/core';
import { categories } from '../../../src/static/Categories';




@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.print()
  }
   print(){
    console.log("testete")
    for (let i = 0; i < categories.length; i++){
    console.log (categories[i]["name"])
  }
  }
  

}
