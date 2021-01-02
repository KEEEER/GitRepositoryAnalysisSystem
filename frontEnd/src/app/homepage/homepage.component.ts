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
  childTitle = "";
  UserID = "";
  val:any;
  constructor(private router:Router, private activerouter:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activerouter.queryParams.subscribe( (Inputvalue:any) => {
        this.childTitle  = Inputvalue['Username'];
        this.UserID  = Inputvalue['UserID'];
        console.log(this.childTitle);
        console.log(this.UserID);
    });
  }

  NavitoCreateProject(){
    console.log("#",this.UserID);
    this.router.navigate([this.ProjectCreatpageurl], { queryParams:{userID: this.UserID}});
  }

}
