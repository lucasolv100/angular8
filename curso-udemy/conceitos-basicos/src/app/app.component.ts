import { Component } from '@angular/core';
import { LearningObservables } from './learning-observables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LearningObservables]
})



export class AppComponent {
  title = 'conceitos-basicos';

  constructor(private learningObservables: LearningObservables){
    
  }
}



