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
  childTitle = "";
  val:any;
  constructor(private router:Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activerouter.queryParams.subscribe( (Inputvalue:any) => {

        this.childTitle  = Inputvalue['Username'];
        console.log(this.childTitle);
    });
  }

}
