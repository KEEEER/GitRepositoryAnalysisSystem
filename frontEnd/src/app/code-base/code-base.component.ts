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

  //totalRepoInfo :string[][] = new Array();
  r = "not yet"
  chartDatasetLabel =["Commit", "Additions", "Deletions", "Code Lines"];
  chartDataset =[];
  chartDataMap :any;
  //--repo
  totalRepoInfo =  [];
  totalRepoInfo_ano=new Array();
  owner = new Array();
  repoNames = new Array();
  totalData = new Array();
  //repoitem = new Array();
  reporequestdata:any;
  ProjectID = '';
  i: number = 0;
  constructor(private codeBaseService: CodeBaseService, private acrouter: ActivatedRoute) {}


  ngOnInit(): void {
    this.ProjectID = window.sessionStorage.getItem('ChosenProjectID');
     this.getTotalRepoInfoOfProject();
    //this.totalRepoInfo = [["KEEEER", "GitRepositoryAnalysisSystem"],["kasoarcat", "super-jetbot"]];
    setTimeout(() =>this.getCodeBase(), 5000);
  }


  getTotalRepoInfoOfProject() {
    const UserRepoData = {
      projectId:undefined,
    };
    UserRepoData.projectId  = this.ProjectID;
    const data = JSON.stringify(UserRepoData);
    this.codeBaseService.getRepoDataOfProject(data).subscribe(
       request => {
        this.reporequestdata = request;
        for(let item of this.reporequestdata){
          let repoitem = []
          repoitem.push(item.ownerName);
          repoitem.push(item.repoName);
          this.totalRepoInfo.push(repoitem);
          console.log(this.totalRepoInfo.length);
        }
      }
    );
    // console.log(this.repoNames);
    // console.log(this.owner);
  }
  getCodeBase() {
    this.chartDataMap = new Map();
    console.log(this.totalRepoInfo.length);
    for(let i = 0; i<this.totalRepoInfo.length; i++){
      const repoInfo = {
        owner: undefined,
        repo: undefined
      };
      repoInfo.owner = this.totalRepoInfo[i][0];
      repoInfo.repo = this.totalRepoInfo[i][1];
      console.log("repoInfo:",repoInfo);
      const data = JSON.stringify(repoInfo);
      this.codeBaseService.getCodeBaseService(data).subscribe(
        request => {
          this.datas = request;
          for (let temp of this.datas[0].weeks_stats) {
            let s = temp.start_week.toString();
            let chartData;
            if (this.chartDataMap.has(s)){
              chartData = this.chartDataMap.get(s);
            }else{
              chartData = [];
              for (let j = 0; j<4; j++){
                chartData.push([]);
                for (let k = 0; k<this.totalRepoInfo.length; k++)
                  chartData[j].push("0");
              }
            }
            chartData[0][i] = temp.commits.toString();
            chartData[1][i] = temp.additions.toString();
            chartData[2][i] = temp.deletions.toString();
            chartData[3][i] = temp.lines_count.toString();
            this.chartDataMap.set(s, chartData);

          }
          if(i == this.totalRepoInfo.length-1){
            let chartDataArray=Array.from(this.chartDataMap);
            chartDataArray.sort(function(a,b){return a[0].localeCompare(b[0])});
            for(let j=0; j<=4; j++){
              const barChartLabels = [];
              const barChartData = [];

              for (let elem of chartDataArray) {
                const s = new Date(+elem[0] * 1000);
                barChartLabels.push(s.toLocaleDateString());
              }
              for(let k = 0; k<this.totalRepoInfo.length; k++){
                const barChartDataElem = {
                  data: [],
                  label: undefined
                };
                barChartDataElem.label = this.totalRepoInfo[k][0] + " - " + this.totalRepoInfo[k][1];
                for (let elem of chartDataArray)
                  barChartDataElem.data.push(elem[1][j][k]);
                barChartData.push(barChartDataElem);
              }

              let chartDatasetElem: any[];
              chartDatasetElem = [];
              chartDatasetElem.push(barChartLabels);
              chartDatasetElem.push(barChartData);
              this.chartDataset.push(chartDatasetElem);
            }
          }
        }
      );

    }

  }

}
