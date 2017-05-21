import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
    @Input() tasksFromParentViaInput: any[];
    @Output() updateStatus = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onTaskStatusUpdate(tasksArrIndex){
      console.log("hi", this.tasksFromParentViaInput[tasksArrIndex].status);
    this.updateStatus.emit(this.tasksFromParentViaInput[tasksArrIndex]);
      // creating this so the Output is involed
  }
}
