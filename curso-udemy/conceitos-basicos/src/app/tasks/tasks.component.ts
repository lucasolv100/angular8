import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service';



@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit {

    public tasks: Task[] = [];
    public selectedTask: Task;

    constructor(private taskService: TaskService) {
    }
    public ngOnInit(): void {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks, err => alert('Erro ' + err));
        // .then((tasks) => this.tasks = tasks)
        // .catch((err) => console.log('erros', err));
    }

    public onSelect(task: Task) {
        this.selectedTask = task;
    }

}