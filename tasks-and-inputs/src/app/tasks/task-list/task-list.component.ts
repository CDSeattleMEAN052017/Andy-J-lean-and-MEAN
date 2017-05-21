import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
tasks: Task[]
  constructor() { }

 updateTaskStatus(task){
     console.log(task)
    console.log(task.status)
    task.status = (task.status)? false : true
    //   if (this.tasks[tasksArrIndex].status = true){
    //       this.tasks[tasksArrIndex].status = false
    //       console.log("if was reached",this.tasks[tasksArrIndex].status)
    //   }
    //   else{
    //       this.tasks[tasksArrIndex].status = true
      }


ngOnInit(){
    this.tasks = [
        {title: "Breathe", status: false},
        {title: "Be thankful", status: false},
        {title: "Get a MEAN Black Belt", status: true}
    ]
}


// }
}
