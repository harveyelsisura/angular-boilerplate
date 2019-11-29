import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  canActivate(): boolean {
    if (!this.loginService.isAuthenticated()) {
      this.router.navigate([""]);
      // without token
      return false;
    }
    // with token
    return true;
  }
}
