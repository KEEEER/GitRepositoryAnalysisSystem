import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { VerifyGitRepoService } from './verify-git-repo.service';
import { CreateProjectService } from './create-project.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectImportMsg = '';
  InputGitRepoUrl: '';
  badImportMsg = '';
  datas: any;
  NameofProject = '';
  DesciptionOfProject= '';
  UserID = '';
  projectURLs: Array<string>;
  IDofProject:'';
  InputGitRepoUrlList = new Array();
  ProjectOverviewpageurl = "choose-project";

  constructor(private router: Router, private verifygitreposervice: VerifyGitRepoService,private createprojectservice: CreateProjectService ,private activerouter:ActivatedRoute) {

   }
  ngOnInit(): void {
    this.UserID = window.sessionStorage.getItem('UserID');
  }

  CheckGitRepoUrlVaild(){
    const GitRepoUrlData = {
      githubUrl:undefined
    };
    GitRepoUrlData.githubUrl  = this.InputGitRepoUrl;
    const data = JSON.stringify(GitRepoUrlData);
    this.verifygitreposervice.verifyGitUrlVaild(data).subscribe(
      request => {
        this.datas = request;
        console.log(this.datas);
        if (this.datas.isUrlVaild == "true"){

          //this.projectImportMsg += '\n' + " [導入成功] "+this.InputGitRepoUrl + '\n';
          this.InputGitRepoUrlList.push(this.InputGitRepoUrl);
          this.InputGitRepoUrl = null;
          if(this.badImportMsg != null ){
            this.badImportMsg = null;
          }
        }
        else{
          this.badImportMsg = "此網址無效，請重新輸入";
        }
      }
    );
  }

  CreatProject(){
    const CreateUserProjectData = {
      userId:undefined,
      projectName:undefined,
      projectDescription:undefined
    };
    CreateUserProjectData.userId  =  this.UserID.toString();
    CreateUserProjectData.projectName  =  this.NameofProject.toString();
    CreateUserProjectData.projectDescription = this.DesciptionOfProject.toString();
    const data = JSON.stringify(CreateUserProjectData);
    this.createprojectservice.createProject(data).subscribe(
      request => {
        this.datas = request;
        console.log(this.datas);
        if (this.datas.projectId != ""){
          this.IDofProject = this.datas.projectId;
          console.log("CreateProjectSuccess",this.IDofProject);
          for(var index in this.InputGitRepoUrlList){
            this.AppendRepo(index);
          }
          this.router.navigate([this.ProjectOverviewpageurl]); //create project ok ,navi to projectoverview

        }
      }
    );
  }

  AppendRepo(index){

    const RepoDataOfProject = {
          projectId:undefined,
          githubUrl:undefined
    };
     RepoDataOfProject.projectId  =  this.IDofProject.toString();
     RepoDataOfProject.githubUrl  =  this.InputGitRepoUrlList[index].toString();

     const repodata = JSON.stringify(RepoDataOfProject);
     this.createprojectservice.appendRepotoProject(repodata).subscribe(
       request => {
         this.datas = request;
         console.log(this.datas);
         if (this.datas.isSuccess == "true"){
           this.IDofProject = this.datas.projectId;
           console.log("appendRepotoProjectSuccess");
         }
       }
     );
  }

}
