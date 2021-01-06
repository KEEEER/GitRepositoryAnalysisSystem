import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GetRepoInfoOfChosenProjectService} from './get-repo-info-of-chosen-project.service';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-choose-repository',
  templateUrl: './choose-repository.component.html',
  styleUrls: ['./choose-repository.component.css']
})
export class ChooseRepositoryComponent implements OnInit {
  ProjectID = '';
  datas: any;
  owner = new Array();
  repoNames = new Array();
  totalData = new Array();


  constructor(private router: Router, private getrepoinfoofchosenproject: GetRepoInfoOfChosenProjectService,private activerouter:ActivatedRoute) {
  }

  ngOnInit(): void {
     this.ProjectID = window.sessionStorage.getItem('ChosenProjectID');
     this.getTotalRepoInfoOfProject();

  }
  getTotalRepoInfoOfProject() {
        const UserRepoData = {
          projectId:undefined,
        };
        UserRepoData.projectId  = this.ProjectID;
        const data = JSON.stringify(UserRepoData);
        this.getrepoinfoofchosenproject.getRepoDataOfProject(data).subscribe(
          request => {
            this.datas = request;
            console.log(this.datas);
            for(let item of this.datas){
              this.repoNames.push(item.repoName);
              this.owner.push(item.ownerName);
            }
          }
        );
        console.log(this.repoNames);
        console.log(this.owner);

        sessionStorage.setItem('totalrepo', JSON.stringify(this.repoNames));
        sessionStorage.setItem('totalowner', JSON.stringify(this.owner));

    }

  goToAnalysisPage(event) {
    const chosenRepoName: string = event.target.id.toString();
    const chosenRepoIndex = this.repoNames.findIndex((element) => (element) == chosenRepoName);
    sessionStorage.setItem('repoName', chosenRepoName);
    sessionStorage.setItem('owner', this.owner[chosenRepoIndex]);

    this.router.navigate(['analysis']);
  }

  // tslint:disable-next-line:typedef
  goToAddRepoPage() {
    this.router.navigateByUrl('add-repo');
  }
  goToAnalysisMultiPage(){

    this.router.navigateByUrl('code-base');

  }
}
