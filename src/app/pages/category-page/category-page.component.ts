import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {


  name:string  = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params["name"]; 
    });
  }
  // @Input name: string;

}
