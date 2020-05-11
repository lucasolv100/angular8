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
    public newTask: Task;

    constructor(private taskService: TaskService) {
    }
    public ngOnInit(): void {
        this.getTasks();
        this.newTask = new Task(null, '');
        // .then((tasks) => this.tasks = tasks)
        // .catch((err) => console.log('erros', err));
    }

    public onSelect(task: Task) {
        this.selectedTask = task;
    }

    public createTask() {

        if (this.newTask) {
            this.newTask.title = this.newTask.title.trim();
            this.taskService.createTask(this.newTask).subscribe(() => alert('Task adicionada com sucesso'), () => alert('Erro ao adicionar a task'));
            this.getTasks();
        }
        else {
            alert("A nova task precisa de um titulo");
        }

    }

    public getTasks() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks, err => alert('Erro ' + err));
    }

    public deleteTask(task: Task) {

        if (confirm("Deseja realmente excluir a tarefa: " + task.title)) {
            this.taskService.deleteTask(task.id).subscribe(() => alert('Tarefa excluida com sucesso'), () => alert('Erro ao excluir a tarefa'));
            this.getTasks();
        }
        
    }

}