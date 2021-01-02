import {Component, OnInit} from '@angular/core';
import {IssueTrackService} from './issue-track.service';

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



  constructor(private issueTrackService: IssueTrackService) {}

  ngOnInit(): void {}



  // tslint:disable-next-line:typedef
  getIssueTrack() {
    const issueTrackData = {
      owner: undefined,
      repo: undefined
    };
    const data = JSON.stringify(issueTrackData);
    this.issueTrackService.getIssueTrackService(data).subscribe(
      request => {
        this.datas = request;
      }
    );
  }
}
