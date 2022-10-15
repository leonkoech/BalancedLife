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
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SigninComponent } from 'src/components/signin/signin.component';
import { SignupComponent } from 'src/components/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesComponent,
    RateComponent,
    LoginComponent,
    SigninComponent, 
    SignupComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule,
    MatCheckboxModule, FormsModule,MatInputModule,MatFormFieldModule,MatIconModule,
    ReactiveFormsModule, MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
