import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './core/loader/loader.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
// MATERIAL DESIGN
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatInputModule
} from "@angular/material";
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { HeaderComponent } from './core/header/header.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { UsersComponent } from './main/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,
    MainComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    PaginationComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
