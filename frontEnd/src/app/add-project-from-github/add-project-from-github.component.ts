import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-project-from-github',
  templateUrl: './add-project-from-github.component.html',
  styleUrls: ['./add-project-from-github.component.css']
})
export class AddProjectFromGithubComponent implements OnInit {
  ProjectNames = ['ProjectA', 'ProjectA', 'ProjectA'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToChooseProject() {
    this.router.navigateByUrl('choose-project');
  }
}
