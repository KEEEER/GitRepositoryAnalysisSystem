import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ChooseProjectComponent } from './choose-project/choose-project.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChooseProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponent {
  title = 'frontEnd';
}
