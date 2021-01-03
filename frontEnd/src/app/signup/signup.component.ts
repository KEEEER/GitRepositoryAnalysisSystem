import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './Signuppage.html',
  styleUrls: ['./signupstyle.css']
})


export class SignupComponent implements OnInit {
  UserInput = '';
  accountInput='';
  passwordInput='';
  RetrypasswordInput = '';
  badRequest = '';
  datas: any;
  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit(): void {
  }
  redirectTo(url){
    this.router.navigateByUrl(url.toString());
  }
  RoutetoLoginPage(){
    this.redirectTo("LoginPage");
  }
  SignUpCheck(){
      const UserSignUpData = {
          userName:undefined,
          account: undefined,
          password: undefined
        };
        UserSignUpData.userName  = this.UserInput;
        UserSignUpData.account  = this.accountInput;
        UserSignUpData.password = this.passwordInput;

        const data = JSON.stringify(UserSignUpData);
        this.signupService.verifySignUpUserAccount(data).subscribe(
          request => {
            this.datas = request;
            if (this.datas.isSuccess == "true"){
              alert("註冊成功!轉至登入頁面")
              this.redirectTo("LoginPage");
              console.log(this.datas.redirect);
            }
            else{
              this.badRequest = "此帳號已被使用，請重新命名";
            }
          }
        );
  }

}
