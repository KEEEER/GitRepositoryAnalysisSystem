import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './Signuppage.html',
  styleUrls: ['./signupstyle.css']
})
export class SignupComponent implements OnInit {
  backgroudimgURL = 'https://images.pexels.com/photos/669617/pexels-photo-669617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  constructor() { }

  ngOnInit(): void {
  }

}
