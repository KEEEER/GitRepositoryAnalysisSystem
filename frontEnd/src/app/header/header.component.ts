import { Component, Input,OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() UserNametitle: string; //value from homepage
  @Input() myVar: number;
  homepageurl = "homepage";
  ProjectCreatwpageurl = "createproject";
  ProjectOverviewpageurl = "choose-project";
  Logoutpageurl = "LoginPage";

  constructor() { }

  ngOnInit(): void {
  }
}
