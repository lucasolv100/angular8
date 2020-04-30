import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service';



@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    providers: [
        // { provide: TaskService, useClass: TaskService }
        TaskService
    ]
})

export class TasksComponent implements OnInit {

    public tasks: Task[] = [];
    public selectedTask: Task;

    constructor(private taskService: TaskService) {
    }
    public ngOnInit(): void {
        this.tasks = this.taskService.getTasks();
    }

    public onSelect(task: Task) {
        this.selectedTask = task;
    }

}