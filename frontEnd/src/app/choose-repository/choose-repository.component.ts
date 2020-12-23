import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-choose-repository',
  templateUrl: './choose-repository.component.html',
  styleUrls: ['./choose-repository.component.css']
})
export class ChooseRepositoryComponent implements OnInit {
  imgURL = 'https://assets.juksy.com/files/articles/53296/800x_100_w-5720399b28484.jpg';
  name = 'John Cena';
  shortName = 'J C';
  conpany = 'WWE';
  jobTitle = 'Wrestler';
  location = 'USA';
  selfIntroduction = 'ARE YOU SURE ABOUT THAT?';
  repoNames = ['REPO1', 'REPO2', 'REPO3'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
