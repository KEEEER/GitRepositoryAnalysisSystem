import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  imgURL = 'https://assets.juksy.com/files/articles/53296/800x_100_w-5720399b28484.jpg';
  projectName = 'WWE2020';
  owner: any;
  repoName: any;

  RepoMemberCounts = 50;


  constructor(private router: Router, private acrouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.acrouter.queryParams.subscribe((Inputvalue: any) => {
      this.owner = Inputvalue.owner;
      this.repoName = Inputvalue.repoName;
    });
  }

  // tslint:disable-next-line:typedef
  goToCommitTrendPage() {
    // this.router.navigateByUrl('commit-trend');
    this.router.navigate(['commit-trend'], {queryParams: {owner: this.owner, repoName: this.repoName}});
  }

  // tslint:disable-next-line:typedef
  goToCodeBasePage() {
    // this.router.navigateByUrl('code-base');
    this.router.navigate(['code-base'], {queryParams: {owner: this.owner, repoName: this.repoName}});
  }

  // tslint:disable-next-line:typedef
  goToIssueTrackPage() {
    // this.router.navigateByUrl('issue-track');
    this.router.navigate(['issue-track'], {queryParams: {owner: this.owner, repoName: this.repoName}});
  }
}
