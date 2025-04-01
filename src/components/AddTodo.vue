<template>
  <div class="add-todo">
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AddTodo',
  setup(_, { emit }) {
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim()) {
        emit('todo-added', newTodo.value);
        newTodo.value = '';
      }
    };

    return {
      newTodo,
      addTodo,
    };
  },
});
</script>

<style scoped>
.add-todo {
  display: flex;
  gap: 10px;
}
.add-todo input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.add-todo button {
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add-todo button:hover {
  background-color: #218838;
}
</style>