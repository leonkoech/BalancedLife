import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {path: 'category', component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
