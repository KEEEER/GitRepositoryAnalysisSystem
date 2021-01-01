import { Component, Input,OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() myVar: number;
  homepageurl = "homepage";
  ProjectCreatwpageurl = "createproject";
  ProjectOverviewpageurl = "choose-project";
  Logoutpageurl = "LoginPage";
  UserName = "Login"

  Username = "";
  constructor() { }

  ngOnInit(): void {
  }
}
