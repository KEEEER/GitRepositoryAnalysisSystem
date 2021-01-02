import {Component, OnInit} from '@angular/core';
import {CodeBaseService} from './code-base.service';


@Component({
  selector: 'app-code-base',
  templateUrl: './code-base.component.html',
  styleUrls: ['./code-base.component.css']
})
export class CodeBaseComponent implements OnInit {

  // 畫圖
  barChartOptions = {
    responsive: true
  };
  barChartType = 'line';
  barChartLegend = true;

  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];
  codeRemove = 4321;
  codeAdd = 12345;

  codeCounts = this.codeAdd - this.codeRemove;
  repoName: any;


  constructor(private codeBaseService: CodeBaseService) {}


  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  getCodeBase(){
    const codebaseData = {
      owner: undefined,
      repo: undefined
    };
  }

}
