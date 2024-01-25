import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
  @Input() todoItem: string = '';
  isCompleted = false;
  @Output() deleteToDoItem = new EventEmitter<string>();

  delete(todoItem: string) {
    this.deleteToDoItem.emit(todoItem);
    this.isCompleted = false;
  }
  toggleStatus() {
    this.isCompleted = !this.isCompleted;
  }
}
