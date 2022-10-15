import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  rating = 11;
  constructor(
    public test: FirebaseFunctionsService
  ) { }

  ngOnInit(): void {
    // this.test.createCategory("test","test",[{name: "just", completed: false, notes: "test"}],4);
  }
  setRate(val: number){
    this.rating = val
  }

}
