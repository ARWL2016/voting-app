import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login/login.component';
import { TopicComponent } from 'app/topic/topic.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ChartComponent } from './chart/chart.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { HelperService } from './services/helper.service';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { CreateTopicGuard } from 'app/services/create-topic-guard.service';
import { ToastrService } from './services/toastr.service';
import { TopicFilterPipe } from './index/topic-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopicComponent,
    LoginComponent,
    CreateTopicComponent,
    RegistrationComponent,
    ChartComponent,
    AboutComponent,
    TopicFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: 'topic/:id', component: TopicComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/register', component: RegistrationComponent },
      { path: 'home', component: IndexComponent },
      { path: 'home/:username', component: IndexComponent },
      { path: 'create', canActivate: [CreateTopicGuard],  component: CreateTopicComponent },
      { path: 'about',  component: AboutComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [
    DataService,
    AuthService,
    HelperService,
    CreateTopicGuard,
    ToastrService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
