import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
  addTask(taskTitle: string) {
    console.log("From wrapper, task " + taskTitle + " is added ");
  }
}
