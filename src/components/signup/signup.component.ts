import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: FirebaseFunctionsService
  ) {}

  submit(): void {
    // the line commented out below adds to firebase
    this.authService.signUp(this.form.value.email, this.form.value.password);
    
  }
  

  ngOnInit(): void {
  }

}
