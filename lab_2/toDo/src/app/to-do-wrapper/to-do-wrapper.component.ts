import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [InputComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
  toDoItem: string = '';

  addToDo(toDoTitle: string) {
    this.toDoItem = toDoTitle;
  }
}
