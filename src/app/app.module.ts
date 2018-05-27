import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { UserComponent } from './container/user/user.component';
const appRoute:Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'employee',
    loadChildren:'src/app/container/employee/employee.module#EmployeeModule'
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo: '/login'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
