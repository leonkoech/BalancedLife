import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/components/category/category.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
const routes: Routes = [
  {path: 'category', component:CategoryComponent},
  {path: 'categoryPage', component:CategoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
