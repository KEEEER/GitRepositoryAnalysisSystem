import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ProjectCreatpageurl = "createproject";
  ProjectOverviewpageurl = "choose-project";
  //header
  Username = "";
  UserID = "";
  val:any;

  constructor(private router:Router, private activerouter:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.Username = window.sessionStorage.getItem('Username');
    this.UserID = window.sessionStorage.getItem('UserID');
    console.log("session_username",this.Username);
    console.log("session_UserID",this.UserID);

  }

  NavitoCreateProject(){
    this.router.navigate([this.ProjectCreatpageurl]);
  }

}
