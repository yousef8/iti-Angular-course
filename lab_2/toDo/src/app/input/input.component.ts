import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output() emitToDoTitle = new EventEmitter<string>();
  toDoTitle: string = '';

  addToDo(taskTitle: string) {
    this.emitToDoTitle.emit(taskTitle);
    this.toDoTitle = "";
  }
}
