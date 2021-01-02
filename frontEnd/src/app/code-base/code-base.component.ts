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
  barChartDataIn = [];
  barChartData = [
    {data: this.barChartDataIn, label: 'Code lines'}
  ];
  codeCounts: any;
  owner: any;
  repo: any;

  constructor(private codeBaseService: CodeBaseService, private acrouter: ActivatedRoute) {}


  ngOnInit(): void {
    this.acrouter.queryParams.subscribe((Inputvalue: any) => {
      this.owner = Inputvalue.owner;
      this.repo = Inputvalue.repoName;

      // console.log(this.repo);
    });
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
          this.barChartDataIn.push(+temp.lines_count.toString());
        }
        this.codeCounts = this.datas[0].lines_count;
      }
    );
  }

}
