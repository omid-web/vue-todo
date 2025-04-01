import { defineStore } from 'pinia';
import { Todo } from '../types';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    removeTodo(todoId: number) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    fetchTodos() {
      // This is where you would typically fetch todos from an API
      // For now, we will return an empty array
      return this.todos;
    },
  },
});