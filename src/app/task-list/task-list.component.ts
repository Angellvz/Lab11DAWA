import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
  
  
})

export class TaskListComponent {
  @Input() tasks: string[] = [];
  taskStatus: boolean[] = [];

  updateTaskStatus(index: number) {
    this.taskStatus[index] = !this.taskStatus[index];
  }
  
}
