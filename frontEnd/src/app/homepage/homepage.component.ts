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
  val:any;
  constructor(private router:Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activerouter.queryParams.subscribe( (Inputvalue:any) => {
        this.val = Inputvalue['Username'];
        console.log(Inputvalue);
    });
  }

}
