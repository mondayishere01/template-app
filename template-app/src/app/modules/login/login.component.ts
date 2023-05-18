import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //FormGroup
  loginform: FormGroup;

  constructor() {
    this.loginform = new FormGroup({
      username: new FormControl('', [
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{7,29}$'),
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{7,29}$'),
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {}

  checkMobile(res) {
    console.log(res);
  }

  login(res) {
    console.log(res);
  }

  open() {
    console.log('not yet created');
    alert('module not created yet');
  }
}
