import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
