import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'

const TASKS: Array<Task> = [
    new Task(1,'Fazer tarefa 1'),
    new Task(2,'Fazer tarefa 2'),
    new Task(3,'Fazer tarefa 3'),
    new Task(4,'Fazer tarefa 4'),
    new Task(5,'Fazer tarefa 5'),
    new Task(6,'Fazer tarefa 6'),
    new Task(7,'Fazer tarefa 7'),
    new Task(8,'Fazer tarefa 8'),
];

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {

    public tasks: Task[] = [];
    public selectedTask:Task;
    constructor() {

    }
    public ngOnInit(): void {
        this.tasks = TASKS;
    }

    public onSelect(task:Task){
        this.selectedTask = task;
    }

}