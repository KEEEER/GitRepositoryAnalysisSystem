import {Component, OnInit} from '@angular/core';
import {CommitTrendService} from './commit-trend.service';

@Component({
  selector: 'app-commit-trend',
  templateUrl: './commit-trend.component.html',
  styleUrls: ['./commit-trend.component.css']
})
export class CommitTrendComponent implements OnInit {
  repoName = 'WWE2020';
  // 畫圖
  datas: any;
  commitList: any;

  barChartOptions = {
    responsive: true
  };
  barChartType = 'line';
  barChartLegend = true;

  barChartLabels = [];
  barChartDataIn = [];
  barChartData = [
    {data: this.barChartDataIn, label: 'Commit Trend'}
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  commitCounts: any;


  constructor(private commitTrendService: CommitTrendService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  getCommitTrend() {
    const commitData = {
      owner: undefined,
      repo: undefined
    };

    commitData.owner = 'KEEEER';
    commitData.repo = 'GitRepositoryAnalysisSystem';
    const data = JSON.stringify(commitData);
    this.commitTrendService.getCommit(data).subscribe(
      request => {

        this.datas = request;

        // tslint:disable-next-line:prefer-const
        for (let temp of this.datas[0].weeks_stats) {
          const s = new Date(+temp.start_week * 1000);
          // clear?
          this.barChartLabels.push(s.toLocaleDateString() );
          this.barChartDataIn.push(+temp.commits.toString());
        }
        this.commitCounts = this.datas[0].total_commits;


      }
    );


}


}
