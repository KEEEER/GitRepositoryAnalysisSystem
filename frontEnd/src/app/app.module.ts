import {Component, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ChooseProjectComponent } from './choose-project/choose-project.component';
import {BrowserModule} from "@angular/platform-browser";
import { ChooseRepositoryComponent } from './choose-repository/choose-repository.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChooseProjectComponent,
    ChooseRepositoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
