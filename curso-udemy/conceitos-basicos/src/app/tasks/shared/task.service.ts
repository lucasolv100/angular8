import { Injectable } from '@angular/core'
import { Task } from './task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable()

export class TaskService {

    public taskURL = 'api/tasks';

    constructor(private http: HttpClient) {

    }


    public getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.taskURL);
    }

    public getImportantTasks(): Observable<Task[]> {
        return this.getTasks().pipe(map(m => m.slice(0, 3)));
    }

    public getTask(id: number): Observable<Task> {

        // tslint:disable-next-line: prefer-const
        let url = `${this.taskURL}/${id}`;
        return this.http.get<Task>(url);
    }

    public createTask(task: Task): Observable<Task> {
        let url = `${this.taskURL}`;
        let body = JSON.parse(JSON.stringify(task));
        let header = new HttpHeaders({ 'Content-type': 'application/json' });

        return this.http.post<Task>(url, body, { headers: header });
    }


    public updateTask(task: Task): Observable<Task> {
        let url = `${this.taskURL}/${task.id}`;
        let body = JSON.parse(JSON.stringify(task));
        let header = new HttpHeaders({ 'Content-type': 'application/json' });

        return this.http.put<Task>(url, body, { headers: header });
    }
    public deleteTask(id:number): Observable<null> {
        let url = `${this.taskURL}/${id}`;
        let header = new HttpHeaders({ 'Content-type': 'application/json' })
        return this.http.delete<null>(url, { headers: header });
    }
}
