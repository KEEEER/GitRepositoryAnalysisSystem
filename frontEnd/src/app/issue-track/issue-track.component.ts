import { Component, OnInit } from '@angular/core';
import {IssueTrackService} from './issue-track.service';

@Component({
  selector: 'app-issue-track',
  templateUrl: './issue-track.component.html',
  styleUrls: ['./issue-track.component.css']
})
export class IssueTrackComponent implements OnInit {


  constructor(private issueTrackService: IssueTrackService) { }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  getIssueTrack(){
    const issueTrackData = {
      owner: undefined,
      repo: undefined
    };
  }
}
