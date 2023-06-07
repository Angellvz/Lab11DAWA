import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  changeFilter(event: any) {
    const value = event.target?.value;
    if (value) {
      this.filterChanged.emit(value);
    }
  }
}
