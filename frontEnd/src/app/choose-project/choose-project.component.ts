import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {GetProjectInfoService} from './get-project-info.service';

@Component({
  selector: 'app-choose-project',
  templateUrl: './choose-project.component.html',
  styleUrls: ['./choose-project.component.css']
})
export class ChooseProjectComponent implements OnInit {
  projectNames = new Array();
  projectIntroduction = new Array();
  projectRepoNumbers = new Array();
  ProjectStartTime = new Array();
  datas: any;
  item:any;
  totalProject:any;
  UserID = '';
  ChosenProjectID = '';

  constructor(private router: Router ,  private getProjectInfoService: GetProjectInfoService,private activerouter:ActivatedRoute ) {}

  ngOnInit(): void {
    this.UserID = window.sessionStorage.getItem('UserID');
    this.getTotalProjectInfo();
  }

   getTotalProjectInfo() {

      const UserProjectData = {
        userId:undefined,
      };
      UserProjectData.userId  = this.UserID;
      const data = JSON.stringify(UserProjectData);
      this.getProjectInfoService.getUserProjectData(data).subscribe(
        request => {
          this.datas = request;
          console.log(this.datas);
        }
      );
  }

  choose_repo(event) {
    console.log(event);
    const chosenId: string = event.target.id.toString();
    sessionStorage.setItem('ChosenProjectID', chosenId);
    console.log("chosenid:",chosenId)
    this.router.navigate(['choose-repository']);
  }

  // tslint:disable-next-line:typedef
  goToAddProjectPage() {
    this.router.navigate(['createproject']);
  }
}
