import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
const routes: Routes = [
  {path: 'category', component:CategoryComponent},
  {path: 'dashboard', component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
