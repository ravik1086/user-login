import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errrorMsgList:any;
  constructor(public router:Router) { }

  public login = new Login();
  ngOnInit() {
    console.log(this.login);
  }

  signIn(){

    let loginObj = this.login;
    this.errrorMsgList = [];
    loginObj.userName === '' ? this.errrorMsgList.push('user Name is required.'):'';
    loginObj.password === '' ? this.errrorMsgList.push('password is required'):'';
  
    if(this.errrorMsgList.length === 0){
      
      if(loginObj.userName === 'abc' && loginObj.password === 'xyz'){
        this.router.navigateByUrl('/user');
      }else{
        this.errrorMsgList.push('invalid user name or password...!')
      }

    }
    
  }

}

