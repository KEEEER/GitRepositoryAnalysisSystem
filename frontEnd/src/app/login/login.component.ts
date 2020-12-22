import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./loginstyle.css']
})
export class LoginComponent implements OnInit {
  name = "Hello";
  backgroudimgURL = 'https://images.pexels.com/photos/669617/pexels-photo-669617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  constructor() { }

  ngOnInit(): void {
  }

}
