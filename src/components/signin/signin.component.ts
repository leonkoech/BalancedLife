import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: FirebaseFunctionsService
  ) {}

  submit(): void {
    // the line commented out below adds to firebase
    this.authService.signIn(this.form.value.email, this.form.value.password);
    console.log(this.form.value)
  }

  ngOnInit(): void {
  }
}
