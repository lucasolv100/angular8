import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service'

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  public task: Task;
  constructor(private taskService:TaskService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.taskService.getTask(+params['id']).then(task => this.task = task);
    })
  }

}
