import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Task } from '../models/Task';
@Injectable()
export class TasksService {
    tasks: Task[];
    constructor() {
        this.tasks = [
            { 
                task_name: "New website for Symu.co",
                days_left: -5
            },
            { 
                task_name: "Free business PSD Template",
                days_left: -2
            },
            { 
                task_name: "New logo for JCD.pl",
                days_left: 5
            },
            { 
                task_name: "Free Icons Set vol. 3",
                days_left: 10
            }
        ];
    }

    getTasks(): Observable<Task[]>{
        return of(this.tasks);
    }
}