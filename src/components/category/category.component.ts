import { Component, OnInit } from '@angular/core';
import { categories } from '../../../src/static/Categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
   test=categories
  constructor(
    
  ) { }

  ngOnInit(): void {
  }
   doNext(object:any){
    console.log(object.name)
  }
  

}
