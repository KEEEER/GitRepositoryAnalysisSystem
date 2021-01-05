import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repo-imformation',
  templateUrl: './repo-imformation.component.html',
  styleUrls: ['./repo-imformation.component.css']
})
export class RepoImformationComponent implements OnInit {
  owner: any;
  repoName = 'Repo1';


  constructor(private router: Router,private activerouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.activerouter.queryParams.subscribe( (Inputvalue:any) => {
    //   this.owner  = Inputvalue['owner'].toString();
    //   this.repoName  = Inputvalue['repoName'].toString();
    // });
    this.repoName = window.sessionStorage.getItem('repoName');
    this.owner = window.sessionStorage.getItem('owner');
  }



  NavitoAnalysis(){
    this.router.navigateByUrl('analysis');
  }
}
