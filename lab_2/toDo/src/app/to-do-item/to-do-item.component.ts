import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../interfaces/to-do';

@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
  @Input() todo!: ToDo;
  @Output() emitToDoDeletion = new EventEmitter<number>();

  delete() {
    this.emitToDoDeletion.emit(this.todo.id);
  }
  toggleStatus() {
    this.todo.isComplete = !this.todo.isComplete;
  }
}
