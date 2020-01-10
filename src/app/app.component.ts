import {Component} from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blockTodoA';

  constructor(private todoService: TodoService) {
    this.todoService.init().then(res => {
    });
  }

  createTodo() {
    this.todoService.createTodo('kkk');
  }
}
