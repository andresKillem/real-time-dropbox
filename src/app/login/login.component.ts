import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private title: string;
  private loginBtnText: string;

  constructor() { 
    this.title = 'Final Version';
    this.loginBtnText = 'Login';
  }

  ngOnInit() {
  }

}
