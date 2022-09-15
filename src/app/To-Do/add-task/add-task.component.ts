import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() AddTask:EventEmitter<Task> = new EventEmitter();
  title:string
  desc:string
  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit()
  {
  if(this.title!=null || this.desc!=null){
   let newTask={
      taskNo:10,
      Title: this.title,
      Description:this.desc,
      Status:true
    }
    this.AddTask.emit(newTask);
  }

  }

}
