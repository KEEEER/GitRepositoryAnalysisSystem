import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GetmultirepodataService} from './getmultirepodata.service';


@Component({
  selector: 'app-comparemultiproject',
  templateUrl: './comparemultiproject.component.html',
  styleUrls: ['./comparemultiproject.component.css']
})
export class ComparemultiprojectComponent implements OnInit {
   ProjectID = '';
   owner = new Array();
   repoNames = new Array();
   datas:any;

  constructor(private router: Router, private getmultirepodataservice: GetmultirepodataService,private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
       this.ProjectID = window.sessionStorage.getItem('ChosenProjectID');
       //this.getTotalRepoInfoOfProject();

  }
  getTotalRepoInfoOfProject() {
        const UserRepoData = {
          projectId:undefined,
        };
        UserRepoData.projectId  = this.ProjectID;
        const data = JSON.stringify(UserRepoData);
        this.getmultirepodataservice.getRepoDataOfProject(data).subscribe(
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


}
