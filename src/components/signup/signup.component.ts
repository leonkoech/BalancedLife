import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseFunctionsService } from 'src/app/services/firebase-functions.service';

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
    console.log(this.form.value)
  }
  

  ngOnInit(): void {
  }

}
