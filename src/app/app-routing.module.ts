import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'category', component:CategoryComponent},
  {path: 'dashboard', component:DashBoardComponent},
  {path: 'categoriesPage', component:CategoriesComponent},
  {path: 'categoryPage', component:CategoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
