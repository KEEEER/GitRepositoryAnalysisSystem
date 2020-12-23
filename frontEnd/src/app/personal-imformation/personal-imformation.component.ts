import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-imformation',
  templateUrl: './personal-imformation.component.html',
  styleUrls: ['./personal-imformation.component.css']
})
export class PersonalImformationComponent implements OnInit {
  imgURL = 'https://assets.juksy.com/files/articles/53296/800x_100_w-5720399b28484.jpg';
  name = 'John Cena';
  shortName = 'J C';
  conpany = 'WWE';
  jobTitle = 'Wrestler';
  location = 'USA';
  selfIntroduction = 'ARE YOU SURE ABOUT THAT?';
  constructor() { }

  ngOnInit(): void {
  }

}
