import {Component, OnInit} from '@angular/core';
import {CodeBaseService} from './code-base.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-code-base',
  templateUrl: './code-base.component.html',
  styleUrls: ['./code-base.component.css']
})
export class CodeBaseComponent implements OnInit {

  // 畫圖
  datas: any;
  barChartOptions = {
    responsive: true
  };
  barChartType = 'line';
  barChartLegend = true;

  barChartLabels = [];
  barChartDataIn = [[],[],[]];
  barChartData = [
    {data: this.barChartDataIn[0], label: 'Code lines'},
    {data: this.barChartDataIn[1], label: 'Additions'},
    {data: this.barChartDataIn[2], label: 'Deletions'}
  ];
  codeCounts: any;
  owner: any;
  repo: any;

  constructor(private codeBaseService: CodeBaseService, private acrouter: ActivatedRoute) {}


  ngOnInit(): void {
    this.repo = window.sessionStorage.getItem('repoName');
    this.owner = window.sessionStorage.getItem('owner');

    this.getCodeBase();
  }

  // tslint:disable-next-line:typedef
  getCodeBase() {
    const codebaseData = {
      owner: undefined,
      repo: undefined
    };
    codebaseData.owner = this.owner;
    codebaseData.repo = this.repo;
    const data = JSON.stringify(codebaseData);
    this.codeBaseService.getCodeBaseService(data).subscribe(
      request => {
        this.datas = request;
        for (const temp of this.datas[0].weeks_stats) {
          const s = new Date(+temp.start_week * 1000);
          // clear?
          this.barChartLabels.push(s.toLocaleDateString());
          this.barChartDataIn[0].push(temp.lines_count.toString());
          this.barChartDataIn[1].push(temp.additions.toString());
          this.barChartDataIn[2].push(temp.deletions.toString());
        }
        this.codeCounts = this.datas[0].lines_count;
      }
    );
  }

}
