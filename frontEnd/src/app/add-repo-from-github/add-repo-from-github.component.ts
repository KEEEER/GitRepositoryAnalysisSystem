import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-repo-from-github',
  templateUrl: './add-repo-from-github.component.html',
  styleUrls: ['./add-repo-from-github.component.css']
})
export class AddRepoFromGithubComponent implements OnInit {
  RepoNames = ['RepoA', 'RepoA', 'RepoA'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToChooseRepoPage() {
    this.router.navigateByUrl('choose-repository');
  }
}
