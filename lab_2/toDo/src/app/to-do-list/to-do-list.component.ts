import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  toDoList: Array<string> = ['yousef', 'omar', 'muhammed'];

  @Input()
  set toDoItem(title: string) {
    if (title.length) {
      this.toDoList.push(title);
    }
  }
}
