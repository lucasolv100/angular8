import {NgModule} from '@angular/core'
import { RouterModule, Router } from "@angular/router"

import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailReactiveComponent } from './tasks/task-detail-reactive/task-detail-reactive.component';

const ROUTES = RouterModule.forRoot([
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'tasks/:id', component: TaskDetailReactiveComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ]);

  @NgModule({
    imports: [ROUTES],
    exports: [RouterModule]
  })

  export class AppRoutingModule{

  }