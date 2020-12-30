import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commit-trend',
  templateUrl: './commit-trend.component.html',
  styleUrls: ['./commit-trend.component.css']
})
export class CommitTrendComponent implements OnInit {
  repoName =  'WWE2020';
  commitAdd = 100;
  commitRemove = 50;
  // 畫圖
  barChartOptions = {
    responsive: true
  };
  barChartType = 'line';
  barChartLegend = true;

  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartData = [
    {data: [220, 59, 80, 81, 56, 55, 40, 40, 234, 34], label: 'Series A'}
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  commitCounts = 65;





  constructor() { }

  ngOnInit(): void {
  }


  }
