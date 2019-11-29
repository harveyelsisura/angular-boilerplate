import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MainService } from './main.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild("toggle", { static: false }) toggle: ElementRef;
  colWidth: any = 10;
  navClass = "nav-hidden";

  constructor(private mainService: MainService) {
    this.navClassToggle();
    this.mainService.sidenavListener.subscribe(res => {
      this.toggle.nativeElement.click();
    });
  }
  ngOnInit() {
  }
  hideNav() {
    this.navClass = "nav-hidden";
  }

  navClassToggle() {
    this.mainService.navClass.subscribe(res => {
      const data: any = res;
      this.navClass = data;
    });
  }
}

@Component({
  selector: "app-dynamic-modal",
  templateUrl: "./dynamic-modal.html",
  styleUrls: ["./main.component.scss"]
})
export class DynamicModal {
  constructor(
    public dialogRef: MatDialogRef<DynamicModal>,
    private appService: AppService,
    private mainService: MainService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
  }
}

