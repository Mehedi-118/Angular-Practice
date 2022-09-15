import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit{

  @Input () singleTask:Task
  @Output() onDeleteClicked:EventEmitter<Task> = new EventEmitter();
  @Output() onDoneClicked:EventEmitter<Task> = new EventEmitter();
  constructor() { }
  onDelete(item: Task){
    this.onDeleteClicked.emit(item);
    console.log("Clicked From singleItem")
}
DoneClicked(task:Task)
{
  console.log("inside DoneClicked");
  this.onDoneClicked.emit(task);
}
  ngOnInit(): void {
  }




}
