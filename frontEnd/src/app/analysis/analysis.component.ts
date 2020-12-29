import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  imgURL = 'https://assets.juksy.com/files/articles/53296/800x_100_w-5720399b28484.jpg';
  projectName = 'WWE2020';
  RepoName = 'Repo1';
  RepoMemberCounts = 50;
  location = 'Japan';
  repoIntroduction = 'Web Ui Design Team';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToCommitTrendPage() {
    this.router.navigateByUrl('commit-trend');
  }

  // tslint:disable-next-line:typedef
  goToCodeBasePage() {
    this.router.navigateByUrl('code-base');
  }

  // tslint:disable-next-line:typedef
  goToIssueTrackPage() {
    this.router.navigateByUrl('issue-track');
  }

  // tslint:disable-next-line:typedef
  goToCommitLogPage() {
    this.router.navigateByUrl('commit-log');
  }
}
