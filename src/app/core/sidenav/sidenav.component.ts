import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private appService: AppService
  ) {
    this.appService.loginListener.subscribe(res => { });
  }

  ngOnInit() {
  }

  hideNav() {
    this.mainService.navClass.next("nav-hidden");
  }
}
