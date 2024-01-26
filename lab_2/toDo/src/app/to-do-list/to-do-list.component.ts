import { Component, Input } from '@angular/core';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { ToDo } from '../interfaces/to-do';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoItemComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  generateId: number = 3;
  toDoList: Array<ToDo> = [{ id: 1, title: 'Grocery', isComplete: false },
  { id: 2, title: 'Buy Milk', isComplete: false },
  { id: 3, title: 'Go to gym', isComplete: false }];

  deleteToDo(id: number) {
    this.toDoList = this.toDoList.filter((todo: ToDo) => todo.id !== id);
  }

  @Input()
  set toDoItem(title: string) {
    if (title.length) {
      this.toDoList.push({ id: ++this.generateId, title: title, isComplete: false });
    }
  }
}
