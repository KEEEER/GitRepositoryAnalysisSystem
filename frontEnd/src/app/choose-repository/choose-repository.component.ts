import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-choose-repository',
  templateUrl: './choose-repository.component.html',
  styleUrls: ['./choose-repository.component.css']
})
export class ChooseRepositoryComponent implements OnInit {

  repoNames = ['cpython', 'REPO2', 'REPO3'];


  constructor(private router: Router, private acrouter: ActivatedRoute) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  goToAnalysisPage() {
    // this.router.navigateByUrl('analysis');
    this.router.navigate(['analysis'], {queryParams: {repoName: this.repoNames[0]}});
  }

  // tslint:disable-next-line:typedef
  goToAddRepoPage() {
    this.router.navigateByUrl('add-repo');
  }
}
