import {Component, OnInit} from '@angular/core';


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
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


  constructor() {
  }


  ngOnInit(): void {
  }

}
