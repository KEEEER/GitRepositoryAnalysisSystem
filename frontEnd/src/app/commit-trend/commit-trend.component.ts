import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-trend',
  templateUrl: './commit-trend.component.html',
  styleUrls: ['./commit-trend.component.css']
})
export class CommitTrendComponent implements OnInit {
  projectName = 'WWE2020';
  commitNum = 65;
  totalAddCode = 12345;
  totalRemoveCode = 4321;


  constructor() { }

  ngOnInit(): void {
  }


  }
