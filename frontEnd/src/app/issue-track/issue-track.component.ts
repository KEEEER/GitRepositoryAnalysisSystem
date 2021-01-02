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
  owner = 'python';
  repo: any;


  constructor(private issueTrackService: IssueTrackService, private acrouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.acrouter.queryParams.subscribe((Inputvalue: any) => {
      this.repo = Inputvalue.repoName;
      console.log(this.repo);
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
      }
    );
  }
}
