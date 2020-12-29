import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  homepageurl = "homepage";
  ProjectCreatwpageurl = "createproject";
  ProjectOverviewpageurl = "projectoverview";
  Logoutpageurl = "LoginPage";


  Username = "";
  constructor() { }

  ngOnInit(): void {
  }
}
