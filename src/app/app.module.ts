import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Project2Component } from './home/projects/project2/project2.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { TasksService } from './services/tasks.service';
import { TaskComponent } from './home/projects/task/task.component';
import { MessagesService } from './services/messages.service';
import { ActivityService } from './services/activity.service';
import { MessageComponent } from './home/projects/message/message.component';
import { ActivityComponent } from './home/projects/activity/activity.component';
import { ArticleBoxComponent } from './article-box/article-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    Project2Component,
    HomeHeaderComponent,
    TaskComponent,
    MessageComponent,
    ActivityComponent,
    ArticleBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    TasksService,
    MessagesService,
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
