import { Component, Input } from '@angular/core';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoItemComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  toDoList: Array<string> = ['Buy Grocery', 'Go to Gym', 'Plan next week'];

  deleteToDo(toDoItem: string) {
    this.toDoList = this.toDoList.filter((item: string) => item !== toDoItem);
  }

  @Input()
  set toDoItem(title: string) {
    if (title.length) {
      this.toDoList.push(title);
    }
  }
}
