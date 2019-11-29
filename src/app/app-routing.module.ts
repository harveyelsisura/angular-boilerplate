import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './login/auth.guard.service';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UsersComponent } from './main/users/users.component';

const mainRoutes: Routes = [
  {
    component: DashboardComponent,
    path: ""
  },
  {
    component: UsersComponent,
    path: "users"
  }
]

const appRoutes: Routes = [
  {
    component: LoginComponent,
    path: ""
  },
  {
    component: MainComponent,
    canActivate: [AuthGuard],
    path: "main",
    children: mainRoutes
  }
];

const route: Routes = [
  {
    component: AppComponent,
    path: "",
    children: appRoutes
  }
];
@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
