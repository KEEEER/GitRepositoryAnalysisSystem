import {Component, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {ChooseProjectComponent} from './choose-project/choose-project.component';
import {BrowserModule} from '@angular/platform-browser';
import {ChooseRepositoryComponent} from './choose-repository/choose-repository.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {CommitTrendComponent} from './commit-trend/commit-trend.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChooseProjectComponent,
    ChooseRepositoryComponent,
    LoginComponent,
    CommitTrendComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
