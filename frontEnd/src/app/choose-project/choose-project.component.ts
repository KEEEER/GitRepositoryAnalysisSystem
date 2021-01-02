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
        }
      );
  }


  // tslint:disable-next-line:typedef
  choose_repo() {
    this.router.navigateByUrl('choose-repository');
  }

  // tslint:disable-next-line:typedef
  goToAddProjectPage() {
    this.router.navigate(['createproject'], { queryParams:{userID:  this.UserID}});
  }
}
