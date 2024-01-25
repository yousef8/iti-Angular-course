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
  @Output() newTask = new EventEmitter<string>();
  taskTitle: string = '';

  addTask(taskTitle: string) {
    this.newTask.emit(taskTitle);
  }
}
