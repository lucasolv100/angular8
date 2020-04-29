import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../shared/task.model'

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() set task(value) { this._task = value; this.taskEdited = { ...value } } get task() { return this._task }
  public taskEdited: Task;
  _task: Task;

  constructor() { }

  ngOnInit(): void {
  }

  salvar() {
    this._task = this.taskEdited;
    console.log("TaskDetailComponent -> salvar -> this._task", this._task)
  }

}
