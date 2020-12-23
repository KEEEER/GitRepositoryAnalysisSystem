import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-trend',
  templateUrl: './commit-trend.component.html',
  styleUrls: ['./commit-trend.component.css']
})
export class CommitTrendComponent implements OnInit {
  imgURL = 'https://assets.juksy.com/files/articles/53296/800x_100_w-5720399b28484.jpg';
  projectName = 'WWE2020';
  RepoName = 'Repo1';
  RepoMemberCounts = 50;
  location = 'Japan';
  repoIntroduction = 'Web Ui Design Team';



  commitNum = 65;
  totalAddCode = 12345;
  totalRemoveCode = 4321;


  constructor() { }

  ngOnInit(): void {
  }


  }
