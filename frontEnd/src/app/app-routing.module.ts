import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ChooseProjectComponent} from './choose-project/choose-project.component';
import {ChooseRepositoryComponent} from './choose-repository/choose-repository.component';
import {LoginComponent} from './login/login.component';
import {CommitTrendComponent} from './commit-trend/commit-trend.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'choose-project', component: ChooseProjectComponent},
  {path: 'choose-repository', component: ChooseRepositoryComponent},
  {path: 'commit-trend', component: CommitTrendComponent}



  // {path: '**', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
