import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'conceitos-basicos';
  task: Task  = new Task(1,'teste');
}

export class Task {
  public id: number;
  public title: string;

  constructor(id:number, title:string)
  {
    this.id = id;
    this.title = title;
  }
}
