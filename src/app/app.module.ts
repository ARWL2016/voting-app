import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import { DataService } from './services/data.service';
import { TopicComponent } from "app/topic/topic.component";
import { CreateTopicComponent } from './create-topic/create-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopicComponent,
    LoginComponent,
    CreateTopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'topic/:id', component: TopicComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: IndexComponent },
      { path: 'create', component: CreateTopicComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
