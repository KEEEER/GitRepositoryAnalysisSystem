import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ChooseProjectComponent} from './choose-project/choose-project.component';
import {ChooseRepositoryComponent} from './choose-repository/choose-repository.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {CommitTrendComponent} from './commit-trend/commit-trend.component';
import {AnalysisComponent} from './analysis/analysis.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {AddRepoComponent} from './add-repo/add-repo.component';
import {AddProjectFromGithubComponent} from './add-project-from-github/add-project-from-github.component';
import {AddRepoFromGithubComponent} from './add-repo-from-github/add-repo-from-github.component';
import {CodeBaseComponent} from './code-base/code-base.component';
import {IssueTrackComponent} from './issue-track/issue-track.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProjectoverviewComponent} from './projectoverview/projectoverview.component';
import {ComparemultiprojectComponent} from './comparemultiproject/comparemultiproject.component';


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: '', component: HomepageComponent},
  {path: 'LoginPage', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'choose-project', component: ChooseProjectComponent},
  {path: 'choose-repository', component: ChooseRepositoryComponent},
  {path: 'createproject', component: AddProjectComponent},
  {path: 'add-repo', component: AddRepoComponent},
  {path: 'add-project-from-github', component: AddProjectFromGithubComponent},
  {path: 'add-repo-from-github', component: AddRepoFromGithubComponent},
  {path: 'analysis', component: AnalysisComponent},
  {path: 'commit-trend', component: CommitTrendComponent},
  {path: 'code-base', component: CodeBaseComponent},
  {path: 'issue-track', component: IssueTrackComponent},
  {path: 'projectoverview', component: ProjectoverviewComponent},
  {path: 'multiproject', component: ComparemultiprojectComponent},
  {path: '**', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
