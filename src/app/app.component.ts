import { Component, AfterContentInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, OnInit {
  title = 'frontend';
  isLogin = false;

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

  ngAfterContentInit() {
    this.initializeApp();
  }

  ngOnInit() {
    console.log('I am at app');
    this.checkLogin();
  }

  initializeApp() {
    // Perform required auth actions
    this.auth.load_jwts();
    this.auth.check_token_fragment();

    //this.checkLogin();
    console.log("I am at init in app");
  }

  checkLogin() {
    console.log('check login at app:', this.auth.activeJWT());
    if (!this.auth.activeJWT()) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  }
}
