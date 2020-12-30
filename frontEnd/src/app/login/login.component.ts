import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./loginstyle.css']
})
export class LoginComponent implements OnInit {
  name = 'Hello';
  backgroudimgURL = 'https://images.pexels.com/photos/669617/pexels-photo-669617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  accountInput: any;
  passwordInput: any;
  datas: any;
  badRequest:any;
  Username:any;
  constructor(private router: Router, private loginService: LoginService) {
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  redirectTo(url){
    this.router.navigateByUrl(url.toString());
  }
  // tslint:disable-next-line
  logInCheck() {
    const UserLoginData = {
      account: undefined,
      password: undefined
    };
    UserLoginData.account  = this.accountInput;
    UserLoginData.password = this.passwordInput;
    const data = JSON.stringify(UserLoginData);
    this.loginService.verifyUserLoginData(data).subscribe(
      request => {
        this.datas = request;
        if (this.datas.redirect){
          //this.redirectTo(this.datas.redirect);
          //this.router.navigateByUrl(url.toString());
          this.router.navigate([this.datas.redirect.toString(), { Username: this.datas.userName }]);
          //this.redirectTo(this.datas.redirect);
          console.log(this.datas.redirect)
          console.log(this.datas.userName)
        }
        else{
          this.badRequest = "帳號或密碼錯誤";
        }
      }
    );
  }

  RoutetoSignup(){
    this.redirectTo("signup");
  }
}
