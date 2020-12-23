import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./loginstyle.css']
})
export class LoginComponent implements OnInit {
  name = 'Hello';
  backgroudimgURL = 'https://images.pexels.com/photos/669617/pexels-photo-669617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  accountInput = "";
  passwordInput = "";
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logInCheck() {
    var UserLoginData = {}; //輸入的資料，填入空物件
    UserLoginData["account"]  = this.accountInput;
    UserLoginData["password"] = this.passwordInput;

    //XMLHttpRequest說明 : https://www.vialley.com/462/coding101-day1-%E5%AD%B8%E7%BF%92%E4%BD%BF%E7%94%A8xmlhttprequest
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://我們的api-web-address.com/api/logIn', true);
    //xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signIn', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(UserLoginData); //將UserInputStr轉格式JSON
    xhr.send(data);
    //收到資料回傳即會執行onload
    xhr.onload = function () {
        var callbackData = JSON.parse(xhr.responseText); //因為輸入資料目前是字串，要轉成物件才能使用
        var str = callbackData.message;

        if (str == "登入成功") {
          alert('登入成功');
        }
        else {
          alert('此帳號不存在或帳號密碼錯誤');

        }
     }

  }



  AuthbyGithub(){
    this.router.navigateByUrl('choose-project');
  }

}
