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


  constructor(private issueTrackService: IssueTrackService, private acrouter: ActivatedRoute) {
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
    // console.log(issueTrackData.owner);
    // console.log(issueTrackData.repo);
    this.issueTrackService.getIssueTrackService(data).subscribe(
      request => {
        this.datas = request;
        for (const temp of this.datas){
          this.titles.push(temp.title);
          this.bodys.push(temp.body);
          this.States.push(temp.state);
          this.startDates.push(temp.created_at);
          this.closeDates.push(temp.closed_at);


        }


      }
    );
  }
}
