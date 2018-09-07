import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Message } from '../models/Message';
@Injectable()
export class MessagesService {
    messages: Message[];
    constructor() {
        this.messages = [
            {
                avatar: "assets/avatars/photo-1441307811206-a12c74889338.png",
                name: "Nina Jones",
                message_text: "Hey you! It's me again :-) I attached new (...)",
                date: "5 minutes ago",
                readed: false
            },
            {
                avatar: "assets/avatars/photo-1441307811206-a12c74889338.png",
                name: "Nina Jones",
                message_text: "Hey! I attached some new PSD file for (...)",
                date: "About 20 hours ago",
                readed: false
            },
            {
                avatar: "assets/avatars/photo-1443381301867-5a36ffaafc42\\ kopia.png",
                name: "James Smith",
                message_text: "Good morning, you are fired!",
                date: "2 days ago",
                readed: true
            },
            {
                avatar: "assets/avatars/photo-1441307811206-a12c74889338.png",
                name: "Nina Jones",
                message_text: "Hello! Could You bring me coffe please?",
                date: "About 20 weeks ago",
                readed: true
            }
        ];
    }

    getMessages(): Observable<Message[]>{
        return of(this.messages);
    }
}