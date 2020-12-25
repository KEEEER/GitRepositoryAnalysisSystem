import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectURLs: ['abcasdfdsf', '123', '456'];

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToAddProjectFromGithub() {
    this.router.navigateByUrl('add-project-from-github');
  }
}
