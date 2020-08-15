import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  loginButtonTitle = "Login";

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log('I am at header');
    this.checkLogin();
    console.log('token:', this.auth.activeJWT());
  }

  onLogout() {
    if (this.isLogin) {
      this.auth.logout();
      this.router.navigate(['']);
    } else {
      const loginUrl = this.auth.build_login_link();
      window.location.href = loginUrl;
    }
    this.checkLogin();
  }

  checkLogin() {
    console.log('I am at check login in header');
    if (this.auth.activeJWT()) {
      this.isLogin = true;
      this.loginButtonTitle = "Logout";
    } else {
      this.isLogin = false;
      this.loginButtonTitle = "Login";
    }
  }

}
