import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {
    email: "",
    password: ""
  }
  type = "password"
  constructor(
    private router: Router,
    private loginService: LoginService,
    private appService: AppService
  ) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.appService.isLoading.next(true);
    setTimeout(() => {
      localStorage.setItem("token", "12345");
      this.appService.isLoading.next(false);
      this.router.navigate(["main"]);
    }, 1500);
  }
}
