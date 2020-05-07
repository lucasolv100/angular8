import { Injectable } from '@angular/core'

import { InMemoryDbService } from "angular-in-memory-web-api"
import { Task } from './tasks/shared/task.model';

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService {

    createDb() {
        let tasks: Array<Task> = [
            new Task(1, 'Fazer tarefa 1'),
            new Task(2, 'Fazer tarefa 2'),
            new Task(3, 'Fazer tarefa 3'),
            new Task(4, 'Fazer tarefa 4'),
            new Task(5, 'Fazer tarefa 5'),
            new Task(6, 'Fazer tarefa 6'),
            new Task(7, 'Fazer tarefa 7'),
            new Task(8, 'Fazer tarefa 8'),
        ];
    
        return { tasks }
    }

}