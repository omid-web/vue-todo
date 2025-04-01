<template>
  <div id="app">
    <h1>Todo App</h1>
    <AddTodo @add-todo="addTodo" />
    <TodoList :todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';
import { Todo } from './types';

export default defineComponent({
  name: 'App',
  components: {
    AddTodo,
    TodoList,
  },
  setup() {
    const todos = ref<Todo[]>([]);

    const addTodo = (todo: Todo) => {
      todos.value.push(todo);
    };

    const removeTodo = (todoToRemove: Todo) => {
      todos.value = todos.value.filter(todo => todo.id !== todoToRemove.id);
    };

    return {
      todos,
      addTodo,
      removeTodo,
    };
  },
});
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #42b983;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #36a76a;
}
</style>
