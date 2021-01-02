import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
    // const UserData = {
    //     userID:undefined,
    //   };
    //   UserData.userID  = this.userID;

    //   const data = JSON.stringify(UserData);

    //   this.getProjectInfoService.getUserProjectData(data).subscribe(
    //     request => {
    //       this.datas = request;
    //       if (this.datas.redirect){
    //         this.totalProject = TotalProjectList.TotalProjectsInfo;
    //         for (item in totalProject) {
    //             this.projectNames.push(item.NumberofProject);
    //             this.projectIntroduction.push(item.DescriptionofProject);
    //             this.projectMemberNumbers.push(item.NumberofMembers);
    //             this.Projectduration.push(item.durationofProject);
    //         }
    //       }
    //       else{
    //         console.log("Project of User is NULL");
    //       }
    //     }
    //   );
  }



  constructor(private router: Router ,  private getProjectInfoService: GetProjectInfoService) { }

  ngOnInit(): void {
    // if (window.location.hash === '#readMore') {
    //   window.location.assign('abc');
    // }


    this.activerouter.queryParams.subscribe( (Inputvalue:any) => {
      this.UserID  = Inputvalue['userID'];
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
