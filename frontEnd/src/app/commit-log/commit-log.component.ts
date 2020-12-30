import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-log',
  templateUrl: './commit-log.component.html',
  styleUrls: ['./commit-log.component.css']
})
export class CommitLogComponent implements OnInit {
  Descriptions = ['I\'m Randy Orton', '123', '567'];
  authors = ['Randy Orton', 'abc', 'xyz'];
  commits = ['e76bf50', '7c4c296', 'a66625a'];
  constructor() { }

  ngOnInit(): void {
  }

}
