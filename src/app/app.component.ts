import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: any = false;
  constructor(private appService: AppService) {
    this.listenForLoader();
  }

  listenForLoader() {
    this.appService.isLoading.subscribe(res => {
      const load: any = res;
      this.isLoading = load;
    });
  }
}
