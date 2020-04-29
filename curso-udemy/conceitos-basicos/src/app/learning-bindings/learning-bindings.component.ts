import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learning-bindings',
  templateUrl: './learning-bindings.component.html',
  styleUrls: ['./learning-bindings.component.css']
})
export class LearningBindingsComponent implements OnInit {

  public mouseClickCount: number;
  public mouseOverCount: number;
  public userName: string;
  public userEmail: string;


  constructor() { 

      this.mouseClickCount = 0;
      this.mouseOverCount = 0;
      this.userEmail = '';
      this.userName = '';
   }

  ngOnInit(): void {
  }

  public onClick(){
    console.log('onclick disparado')
    this.mouseClickCount++;
  }
  public onMouseOver(){
    console.log('onMouseOver disparado')
    this.mouseOverCount++;
  }

}
