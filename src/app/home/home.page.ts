import { Component } from '@angular/core';
import { Todo } from '../models/todo';

const DUMP_TODO_LIST: Todo[] = [
  {
    id: 1,
    title: 'Cooking',
    category: { name: 'Personal' },
    isComplete: false,
    createAt: new Date(),
    updateAt: new Date(),
  },
  {
    id: 2,
    title: 'Coding',
    category: { name: 'Personal' },
    isComplete: true,
    createAt: new Date(),
    updateAt: new Date(),
    dueAt: new Date(),
  },
  {
    id: 3,
    title: 'Learning',
    category: { name: 'Personal' },
    isComplete: false,
    createAt: new Date(),
    updateAt: new Date(),
  },
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todos: any = DUMP_TODO_LIST.map((todo) => ({
    ...todo,
    dueAt: new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }).format(todo.dueAt),
  }));

  constructor() {}
}
