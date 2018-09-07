import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Activity } from '../models/Activity';
@Injectable()
export class ActivityService {
    activity: Activity[];
    constructor() {
        this.activity = [
            {
                avatar: "assets/avatars/photo-1441307811206-a12c74889338.png",
                name: "Nina Jones",
                activity_type: "added a new project",
                activity_reference: "Free UI Kit",
                date: "Just now",
                readed: false
            },
            {
                avatar: "assets/avatars/photo-1443381301867-5a36ffaafc42\\ kopia.png",
                name: "James Smith",
                activity_type: "commented project",
                activity_reference: "Free PSD Template",
                date: "40 minutes ago",
                readed: false
            },
            {
                avatar: "assets/avatars/photo-1428931996691-a5108d4cdbf5.png",
                name: "Alex Clooney",
                activity_type: "completed task",
                activity_reference: "Symu Website",
                date: "1 hour ago",
                readed: true
            },
            {
                avatar: "assets/avatars/photo-1442458370899-ae20e367c5d8.png",
                name: "Alexandra Spears",
                activity_type: "added a new project",
                activity_reference: "Free PSD (...)",
                date: "3 nours ago",
                readed: true
            }
        ];
    }

    getActivity(): Observable<Activity[]>{
        return of(this.activity);
    }
}