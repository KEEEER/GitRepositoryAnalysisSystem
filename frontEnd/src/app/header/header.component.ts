import { Component, Input,OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() UserNametitle: string; //value from homepage
  @Input() UserID: string; //value from homepage
  @Input() myVar: number;
  homepageurl = "homepage";
  ProjectCreatwpageurl = "createproject";
  ProjectOverviewpageurl = "choose-project";
  Logoutpageurl = "LoginPage";
  datas: any;
  username:any;
  userid:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  NavitoCreateProject(){
    this.router.navigate([this.ProjectCreatwpageurl], { queryParams:{username: this.UserNametitle ,userid: this.UserID}});
  }
}
