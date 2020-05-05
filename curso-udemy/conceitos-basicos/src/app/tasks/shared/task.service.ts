import { Injectable } from '@angular/core'
import { Task } from './task.model';

const TASKS: Array<Task> = [
    new Task(1, 'Fazer tarefa 1'),
    new Task(2, 'Fazer tarefa 2'),
    new Task(3, 'Fazer tarefa 3'),
    new Task(4, 'Fazer tarefa 4'),
    new Task(5, 'Fazer tarefa 5'),
    new Task(6, 'Fazer tarefa 6'),
    new Task(7, 'Fazer tarefa 7'),
    new Task(8, 'Fazer tarefa 8'),
];

@Injectable()

export class TaskService {

    public async getTasks(): Promise<Task[]> {
        let promisse = new Promise<Task[]>((resolve, reject) => {

            if (TASKS.length > 0) {
                resolve(TASKS);
            }
            else {
                let error_msg = "Não há tarefas"
                reject(error_msg)
            }

        });

        return promisse;
    }

    public async getImportantTasks(): Promise<Task[]> {
        return Promise.resolve(TASKS.slice(0, 3))
    }

    public async getTask(id:number): Promise<Task>{
        return this.getTasks().then(tasks => tasks.find(x => x.id === id))
    }
}