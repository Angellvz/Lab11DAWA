import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = [];
  taskStatus: boolean[] = [];

  addTask(task: string) {
    this.tasks.push(task);
    this.taskStatus.push(false); // Estado inicial: No completada
  }
}
