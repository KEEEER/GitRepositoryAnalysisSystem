# GitRepositoryAnalysisSystem
use angular + java servlet
# output Angular
replace "~{PathToProject}" under "outputPath" in frontEnd/src/angular.json  (ex:F:\\workspace\\)  
cd frontEnd  
ng build --watch --base-href /GitRepositoryAnalysisSystem/frontEnd/
The output will be in the following location:  
GitRepositoryAnalysisSystem\src\main\webapp\frontEnd\

ng add @angular/materia  
to use Angular materia

npm install @angular/cdk --save

如果build完發現頁面均無變化
>>加入--outputHashing=all
使用ng build --watch --outputHashing=all --base-href /GitRepositoryAnalysisSystem/frontEnd/