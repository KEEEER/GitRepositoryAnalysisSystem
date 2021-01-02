import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {GetProjectInfoService} from './get-project-info.service';

@Component({
  selector: 'app-choose-project',
  templateUrl: './choose-project.component.html',
  styleUrls: ['./choose-project.component.css']
})
export class ChooseProjectComponent implements OnInit {
  projectNames = [];
  projectIntroduction = [];
  projectMemberNumbers = [];
  Projectduration = [];
  userID:any;
  datas: any;
  item:any;
  totalProject:any;
  UserID = '';

  getTotalProjectInfo() {

  }



  constructor(private router: Router ,  private getProjectInfoService: GetProjectInfoService,private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activerouter.queryParams.subscribe( (Inputvalue:any) => {
    this.UserID  = Inputvalue['userid'];
    console.log(this.UserID);
    });
  }

  // tslint:disable-next-line:typedef
  choose_repo() {
    this.router.navigateByUrl('choose-repository');
  }

  // tslint:disable-next-line:typedef
  goToAddProjectPage() {
    this.router.navigateByUrl('add-project');
  }
}
