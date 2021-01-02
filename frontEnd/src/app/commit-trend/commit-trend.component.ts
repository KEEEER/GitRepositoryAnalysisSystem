import {Component, OnInit} from '@angular/core';
import {CommitTrendService} from './commit-trend.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-commit-trend',
  templateUrl: './commit-trend.component.html',
  styleUrls: ['./commit-trend.component.css']
})
export class CommitTrendComponent implements OnInit {

  // 畫圖
  datas: any;
  commitList: any;

  barChartOptions = {
    responsive: true
  };
  barChartType = 'line';
  barChartLegend = true;
  barChartLabels = [];
  barChartDataIn = [[], [], [], [], []];

  userNames = [];
  barChartData = [
    {data: this.barChartDataIn[0], label: 'Commit Trend'},
    {data: this.barChartDataIn[1], label: '1'},
    {data: this.barChartDataIn[2], label: '2'},
    {data: this.barChartDataIn[3], label: '3'},
    {data: this.barChartDataIn[4], label: '4'},
  ];
  commitCounts: any;
  owner: any;
  repo: any;


  constructor(private commitTrendService: CommitTrendService, private acrouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.acrouter.queryParams.subscribe((Inputvalue: any) => {
      this.owner = Inputvalue.owner;
      this.repo = Inputvalue.repoName;
    });
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
        // for (let i = 1; i < 5; i++) {
        //   this.userNames.push(this.datas[i].user_name);
        //   console.log(this.datas[i].user_name);
        // }
        // 取data
        for (let i = 0; i < this.datas.length; i++) {
          for (const temp of this.datas[i].weeks_stats) {
            this.barChartDataIn[i].push(+temp.commits.toString());
          }
        }

        // y軸
        for (const temp of this.datas[0].weeks_stats) {
          const s = new Date(+temp.start_week * 1000);
          this.barChartLabels.push(s.toLocaleDateString());
        }
        this.commitCounts = this.datas[0].total_commits;


      }
    );


  }


}
