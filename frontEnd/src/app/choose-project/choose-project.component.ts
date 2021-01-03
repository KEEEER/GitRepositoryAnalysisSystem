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


  constructor(private router: Router ,  private getProjectInfoService: GetProjectInfoService,private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activerouter.queryParams.subscribe( (Inputvalue:any) => {
    this.UserID  = Inputvalue['userid'].toString();
    console.log(this.UserID);
    });
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
          for(let item of this.datas){
            this.projectNames.push(item.projectName);
            this.projectIntroduction.push(item.projectDescription);
            this.projectRepoNumbers.push(item.gitRepoCount);
            this.ProjectStartTime.push(item.projectStartTime);
          }
        }
      );
  }


  // tslint:disable-next-line:typedef
  choose_repo() {
    this.router.navigate(['choose-repository'], { queryParams:{userID:  this.UserID}});
  }

  // tslint:disable-next-line:typedef
  goToAddProjectPage() {
    this.router.navigate(['createproject'], { queryParams:{userID:  this.UserID}});
  }
}
