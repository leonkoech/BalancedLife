import { Component, OnInit } from '@angular/core';
import { categories } from '../../../src/static/Categories';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
   test=categories
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
   doNext(object:any){
    console.log(object.name)
  }
  goToRedirect(pagename:any, item:any){
   
    this.router.navigate([pagename, item]);
  }

  

}

