import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { VerifyGitRepoService } from './verify-git-repo.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  InputGitRepoUrl = '';
  datas: any;
  projectURLs:string[];
  constructor(private router: Router, private verifygitreposervice: VerifyGitRepoService) { }
  ngOnInit(): void {
  }

  CheckGitRepoUrlVaild(){
    const GitRepoUrlData = {
              GithubUrl:undefined
            };
            GitRepoUrlData.GithubUrl  = this.InputGitRepoUrl;
    const data = JSON.stringify(GitRepoUrlData);
    this.verifygitreposervice.verifyGitUrlVaild(data).subscribe(

      request => {
        this.datas = request;
        if (this.datas.isUrlVaild){
          //alert("驗證成功!轉至登入頁面")
          this.projectURLs.push(this.InputGitRepoUrl);
        }
        else{
          //this.badRequest = "此網址無效，請重新輸入";
        }
      }
    );


  }
}
