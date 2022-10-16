import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './pages/intro/intro.component';

const routes: Routes = [
  {path: '', component:IntroComponent},
  {path: 'auth', component:LoginComponent},
  {path: 'category/:name', component:CategoryComponent},
  {path: 'category', component:CategoryComponent},
  {path: 'categoryPage/:name', component:CategoryPageComponent},
  {path: 'dashboard', component:DashBoardComponent},
  {path: 'categoriesPage', component:CategoriesComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
