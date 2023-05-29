import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //FormGroup
  loginForm: FormGroup;
  signupForm: FormGroup;
  public loginPassword: boolean;
  public signinPassword: boolean;
  public formDisplay: boolean;

  userList: Array<any> = [
    { username: 'User1234', password: 'password' }
  ];

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{7,29}$'),
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{7,29}$'),
        Validators.required,
      ]),
    });
    this.signupForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
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
    // let isExist=this.userList.find((oid)=>oid==res.oid)
    let isExist=this.userList.some(res);
    console.log(res);
    console.log(this.userList);
    console.log(isExist);
  }
}
