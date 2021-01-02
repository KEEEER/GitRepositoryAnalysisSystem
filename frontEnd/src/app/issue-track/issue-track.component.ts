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
  titles = ['title1', 'title2', 'title2'];
  bodys = ['body1', 'body2', 'body3'];
  startDates = ['startDate1', 'startDate', 'startDate'];
  closeDates = ['closeDate1', 'closeDate', 'closeDate'];
  States = ['State1', 'State2', 'State3'];
  owner: any;
  repo: any;


  constructor(private issueTrackService: IssueTrackService, private acrouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.acrouter.queryParams.subscribe((Inputvalue: any) => {
      this.owner = Inputvalue.owner;
      this.repo = Inputvalue.repoName;
    });
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
        for (const temp of this.datas) {
          this.titles.push(temp.title);
          this.bodys.push(temp.body);
          this.startDates.push(temp.created_at);
          this.closeDates.push(temp.closed_at);
          this.States.push(temp.state);

        }
      }
    );
  }
}
