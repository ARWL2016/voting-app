import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login/login.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { TopicComponent } from 'app/topic/topic.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { CreateTopicGuard } from 'app/services/create-topic-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopicComponent,
    LoginComponent,
    CreateTopicComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'topic/:id', component: TopicComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/register', component: RegistrationComponent },
      { path: 'home', component: IndexComponent },
      { path: 'create', canActivate: [CreateTopicGuard],  component: CreateTopicComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [ DataService, AuthService, CreateTopicGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
