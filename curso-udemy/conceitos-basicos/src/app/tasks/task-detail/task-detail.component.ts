import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators'; 

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service'

import {Location} from '@angular/common'

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  public task: Task;
  constructor(private taskService:TaskService, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap((params:Params) => this.taskService.getTask(+params['id']))).subscribe(task => this.task = task);
  }

  goBack(){
    this.location.back();
  }

}
