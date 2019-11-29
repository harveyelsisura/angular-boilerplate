import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main/main.service';
declare var swal: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profile_image = "";

  constructor(private router: Router, private mainService: MainService) { }

  ngOnInit() {
  }
  myProfile() {
  }
  toggleNav() {
    this.mainService.navClass.next("nav-active");
  }
  logout() {
    swal({
      title: "Confirmation",
      text: "Are you sure you want to logout?",
      type: "warning"
    }).then(confirm => {
      if (confirm.value) {
        localStorage.clear();
        this.router.navigate([""]);
      }
    });
  }
}
