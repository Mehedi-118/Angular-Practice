import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {

  TaskList:Task[]
  taskItemLocalStorage:string
  constructor() {
    this.taskItemLocalStorage=localStorage.getItem("TaskList");
    if(this.taskItemLocalStorage==null){
      this.TaskList=[];
    }
    else{
      this.TaskList=JSON.parse(this.taskItemLocalStorage);
    }
   }

   DeleteTask(task:Task){
    console.log(task);
    let indexOfTask=this.TaskList.indexOf(task);
    if(indexOfTask>=0)
    {
      this.TaskList.splice(indexOfTask,1);
      localStorage.setItem("TaskList",JSON.stringify(this.TaskList));
    }

  }
  AddTask(task:Task){
    console.log(task);
   this.TaskList.unshift(task);
   localStorage.setItem("TaskList",JSON.stringify(this.TaskList));

  }
  MarkTaskAsDone(task:Task)
  {
    let indexOfTask=this.TaskList.indexOf(task);
    this.TaskList[indexOfTask].Status=!this.TaskList[indexOfTask].Status;
    localStorage.setItem("TaskList",JSON.stringify(this.TaskList));

    console.log("from Mark As Done");

  }
  ngOnInit(): void {
  }


}
