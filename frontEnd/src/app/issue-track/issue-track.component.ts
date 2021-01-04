import {Component, OnInit} from '@angular/core';
import {IssueTrackService} from './issue-track.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-issue-track',
  templateUrl: './issue-track.component.html',
  styleUrls: ['./issue-track.component.css']
})
export class IssueTrackComponent implements OnInit {

  datas: any;
  titles = [];
  bodys = [];
  startDates = [];
  closeDates = [];
  States = [];
  owner: any;
  repo: any;
  step = 0;
  // issue: {
  //   title: any,
  //   body: any,
  //   startDate: any,
  //   closeDate: any,
  //   State: any
  // };
  // issues = [];

  constructor(private issueTrackService: IssueTrackService, private acrouter: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  setStep(index: number) {
    this.step = index;
  }

  // tslint:disable-next-line:typedef
  nextStep() {
    this.step++;
  }

  // tslint:disable-next-line:typedef
  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.repo = window.sessionStorage.getItem('repoName');
    this.owner = window.sessionStorage.getItem('owner');

    this.getIssueTrack();
  }

  // tslint:disable-next-line:typedef
  getIssueTrack() {
    const issueTrackData = {
      owner: undefined,
      repo: undefined
    };
    issueTrackData.owner = this.owner;
    issueTrackData.repo = this.repo;
    const data = JSON.stringify(issueTrackData);
    this.issueTrackService.getIssueTrackService(data).subscribe(
      request => {
        this.datas = request;
        for (const temp of this.datas){
          this.titles.push(temp.title);
          this.bodys.push(temp.body);
          this.States.push(temp.state);
          this.startDates.push(temp.created_at);
          this.closeDates.push(temp.closed_at);

          // this.issue.body(temp.title, temp.body, temp.state, temp.created_at, temp.closed_at)
          // this.issue.title = temp.title;
          // this.issue.body = temp.body;
          // this.issue.State = temp.state;
          // this.issue.startDate = temp.created_at;
          // this.issue.closeDate = temp.closed_at;
          // this.issues.push(this.issue);
        }


      }
    );
  }
}
