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
    {data: [], label: 'Commit Trend'},
    {data: [], label: 'Additions'},
    {data: [], label: 'Deletions'},
    {data: [], label: 'Code Lines'}
  ];

  // 個人圖


  barChartOptions2 = {
    responsive: true
  };
  barChartType2 = 'line';
  barChartLegend2 = true;

  barChartDataIn = [[]];
  // tslint:disable-next-line:max-line-length
  tatolbarCharlist = [];
  leftTatolbarCharlist = [];
  rightTatolbarCharlist = [];

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
          this.barChartData[1].data.push(+temp.additions.toString());
          this.barChartData[2].data.push(+temp.deletions.toString());
          this.barChartData[3].data.push(+temp.lines_count.toString());
        }
        this.commitCounts = this.datas[0].total_commits;

        // 個別圖

        for (let i = 1; i < this.datas.length; i++) {
          for (const temp of this.datas[i].weeks_stats) {
            this.barChartDataIn.push([]);
            this.barChartDataIn[i].push(+temp.commits.toString());
          }
        }

        for (let i = 1; i < this.datas.length; i++) {
          let temp: any[];
          temp = [];
          const barChartLabels2 = [];
          const barChartData2 = [
            {data: [], label: 'Commit Trend'},
            {data: [], label: 'Additions'},
            {data: [], label: 'Deletions'}
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
            barChartData2[1].data.push(temp.additions);
            barChartData2[2].data.push(temp.deletions);
          }
          temp.push(barChartLabels2);
          temp.push(barChartData2);
          temp.push(this.datas[i].user_name);

          this.tatolbarCharlist.push(temp);
        }
        for (let i = 0; i < Math.round(this.tatolbarCharlist.length / 2); i++) {
          this.leftTatolbarCharlist.push(this.tatolbarCharlist[i]);
        }
        for (let i = Math.round(this.tatolbarCharlist.length / 2); i < this.tatolbarCharlist.length; i++) {
          this.rightTatolbarCharlist.push(this.tatolbarCharlist[i]);
        }
      }
    );


  }
}
