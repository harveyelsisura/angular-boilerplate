import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { api_url } from '../services/global';
import { AppService } from '../services/app.service';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: Http, private appService: AppService) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (token != null) {
      return true;
    } else {
      return false;
    }
  }
  // AUTH ----------------------------------------------------------
  loginSuperAdmin(data) {
    const url = `${api_url}/v1/adminAuth`,
      headers: Headers = new Headers({
        "Content-Type": "application/json"
      });

    return this.appService.postService(url, data, headers);
  }
}
