import { Component } from '@angular/core';
import { ToDoWrapperComponent } from './to-do-wrapper/to-do-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToDoWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDo';
}
