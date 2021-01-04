import {Component, OnInit} from '@angular/core';
import {CommitTrendService} from './commit-trend.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-commit-trend',
  templateUrl: './commit-trend.component.html',
  styleUrls: ['./commit-trend.component.css']
})
export class CommitTrendComponent implements OnInit {

  constructor(private commitTrendService: CommitTrendService, private acrouter: ActivatedRoute) {

  }

  // 畫圖
  datas: any;
  commitList: any;

  barChartOptions = {
    responsive: true
  };
  barChartType = 'line';
  barChartLegend = true;

  barChartLabels = [];
  barChartData = [
    {data: [], label: 'Commit Trend'}
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // 個人圖


  barChartOptions2 = {
    responsive: true
  };
  barChartType2 = 'line';
  barChartLegend2 = true;

  barChartDataIn = [[10, 20, 30, 40, 50], [1, 2, 3, 4, 5], [10, 20, 30, 40, 50], [10, 20, 30, 40, 50]];
  // tslint:disable-next-line:max-line-length
  tatolbarCharlist = [];

  commitCounts: any;
  owner: any;
  repo: any;

  // tslint:disable-next-line:typedef

  ngOnInit(): void {
    this.repo = window.sessionStorage.getItem('repoName');
    this.owner = window.sessionStorage.getItem('owner');

    this.getCommitTrend();
  }

  // tslint:disable-next-line:typedef
  getCommitTrend() {
    const commitData = {
      owner: undefined,
      repo: undefined
    };

    commitData.owner = this.owner;
    commitData.repo = this.repo;
    const data = JSON.stringify(commitData);
    this.commitTrendService.getCommit(data).subscribe(
      request => {

        this.datas = request;

        // all 圖
        for (const temp of this.datas[0].weeks_stats) {
          const s = new Date(+temp.start_week * 1000);
          // clear?
          this.barChartLabels.push(s.toLocaleDateString());
          this.barChartData[0].data.push(+temp.commits.toString());
        }
        this.commitCounts = this.datas[0].total_commits;

        // 個別圖

        for (let i = 1; i < this.datas.length; i++) {
          for (const temp of this.datas[i].weeks_stats) {
            this.barChartDataIn.push([]);
            this.barChartDataIn[i].push(+temp.commits.toString());
          }
        }
        console.log(this.barChartDataIn[0]);
        console.log(this.barChartDataIn[1]);

        for (let i = 1; i < this.datas.length; i++) {
          let temp: any[];
          temp = [];
          const barChartLabels2 = [];
          const barChartData2 = [
            {data: [], label: ''}
          ];
          temp.push(this.barChartOptions2);
          temp.push(this.barChartType2);
          temp.push(this.barChartLegend2);
          // tslint:disable-next-line:no-shadowed-variable
          for (const temp of this.datas[i].weeks_stats) {
            const s = new Date(+temp.start_week * 1000);
            // clear?
            barChartLabels2.push(s.toLocaleDateString());
            barChartData2[0].data.push(temp.commits);
          }
          temp.push(barChartLabels2);
          temp.push(barChartData2);

          this.tatolbarCharlist.push(temp);
        }
      }
    );
  }
}
