<template>
  <div class="todo-list">
    <h2>Todo List</h2>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo(todo.id)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';
import { Todo } from '../types';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
  },
  methods: {
    removeTodo(id: number) {
      this.$emit('remove-todo', id);
    },
  },
});
</script>

<style scoped>
.todo-list {
  margin: 20px;
}

.todo-list h2 {
  font-size: 24px;
}

.todo-list ul {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  margin: 10px 0;
}
</style>