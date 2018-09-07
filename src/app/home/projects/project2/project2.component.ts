import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/Task';
import { TasksService } from '../../../services/tasks.service';
import { MessagesService } from '../../../services/messages.service';
import { Message } from '../../../models/Message';
import { Activity } from '../../../models/Activity';
import { MyMessageEvent } from '../../../models/MyMessageEvent';
import { ActivityService } from '../../../services/activity.service';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {
  tasks: Task[];
  delayTasks: number;
  messages: Message[];
  unreadedMessages: number;
  activities: Activity[];

  constructor(
    private tasksService: TasksService,
    private messagesService: MessagesService,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.getTasks();
    this.getMessages();
    this.getActivities();
  }

  private getTasks(){
    this.tasksService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.delayTasks = this.getDelayedTasks();
    });
  }

  private getMessages(){
    this.messagesService.getMessages().subscribe(messages => {
      this.messages = messages;
      this.unreadedMessages = this.getUnreadedMessages();
    });
  }

  private getActivities(){
    this.activityService.getActivity().subscribe(activities => {
      this.activities = activities;
    });
  }

  private getDelayedTasks(){
    return this.tasks.filter(tasks => tasks.days_left < 0).length;
  }

  private getUnreadedMessages(){
    return this.messages.filter(message => !message.readed).length;
  }

  onMessageEmite(myMessageEvent: MyMessageEvent) {
    this.messages[myMessageEvent.messageIndex].readed = myMessageEvent.readed;
    this.unreadedMessages = this.getUnreadedMessages();
    console.log('myMessageEvent', myMessageEvent);
  }
}
