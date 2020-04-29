import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learning-bindings',
  templateUrl: './learning-bindings.component.html',
  styleUrls: ['./learning-bindings.component.css']
})
export class LearningBindingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(){
    console.log('onclick disparado')
  }
  public onMouseOver(){
    console.log('onMouseOver disparado')
  }

}
