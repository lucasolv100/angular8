import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-detail-reactive',
  templateUrl: './task-detail-reactive.component.html',
  styleUrls: ['./task-detail-reactive.component.css']
})
export class TaskDetailReactiveComponent implements OnInit, AfterViewInit {

  public reactiveTaskForm: FormGroup;
  public task: Task;

  public taskDoneOptions: Array<any> = [
    { value: false, texto: 'Pendente' },
    { value: false, texto: 'Feito' }
  ];

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) { 
    this.reactiveTaskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      deadLine: [null],
      done: [null],
      description: [null]
    });
  }
  ngAfterViewInit(): void {
    $("#deadLine").datetimepicker({
      sideBySide: true,
      locale: 'pt-br'
    }).on('dp.change', () => this.reactiveTaskForm.get("deadLine").patchValue(<string>$("#deadLine").val()));
  }

  // ngAfterViewInit(): void {
  //   $("#deadLine").datetimepicker({
  //     sideBySide: true,
  //     locale: 'pt-br'
  //   }).on('dp.change', () => this.task.deadLine = <string>$("#deadLine").val());
  // }

  ngOnInit(): void {

    this.task = new Task(null, null);

    this.activatedRoute.params
      .pipe(switchMap((params: Params) => this.taskService.getTask(+params['id']))).subscribe(task => this.setTask(task));
  }
  goBack() {
    this.location.back();
  }

  public setTask(task: Task) {
    this.task = task;
    this.reactiveTaskForm.patchValue(task);
  }

  public updateTask() {

    this.task.title = this.reactiveTaskForm.get('title').value;
    this.task.deadLine = this.reactiveTaskForm.get('deadLine').value;
    this.task.done = this.reactiveTaskForm.get('done').value;
    this.task.description = this.reactiveTaskForm.get('description').value;

    this.taskService.updateTask(this.task)
      .subscribe(() => alert('Tarefa atualizada com sucesso'), err => { alert('Erro ao atualizar '); console.log(' err', err) });

  }


}
