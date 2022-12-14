import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from 'src/components/category/category.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from ".env/frebase"
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { CategoriesComponent } from './components/categories/categories.component';
import { RateComponent } from './components/rate/rate.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { DashboardCategoryComponent } from './components/dashboard-category/dashboard-category.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SigninComponent } from 'src/components/signin/signin.component';
import { SignupComponent } from 'src/components/signup/signup.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { IntroComponent } from './pages/intro/intro.component';
import { SampleChartsComponent } from './components/sample-charts/sample-charts.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesComponent,
    RateComponent,
    DashBoardComponent,
    DashboardCategoryComponent,
    DashboardChartComponent,
    LoginComponent,
    SigninComponent, 
    SignupComponent,
    CategoryPageComponent,
    DashboardTableComponent,
    IntroComponent,
    SampleChartsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule,
    MatCheckboxModule, FormsModule,MatInputModule,MatFormFieldModule,MatIconModule,
    ReactiveFormsModule, MatTabsModule,  MatCardModule, MatToolbarModule, FlexLayoutModule,
    NgChartsModule,
     MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
