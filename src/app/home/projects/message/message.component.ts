import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../models/Message';
import { MyMessageEvent } from '../../../models/MyMessageEvent';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input() messageIndex: number;
  @Output() messageEmiter = new EventEmitter<MyMessageEvent>();
  constructor() { }

  ngOnInit() {
  }

  onReadMessege(){
    this.messageEmiter.emit({
      messageIndex: this.messageIndex,
      readed: true
    });
  }

  onUnreadMessage(){
    this.messageEmiter.emit({
      messageIndex: this.messageIndex,
      readed: false
    });
  }
}
