<template>
  <div class="todo-item">
    <span>{{ todo.text }}</span>
    <button @click="removeTodo">Remove</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '../types';

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as () => Todo,
      required: true
    }
  },
  methods: {
    removeTodo() {
      this.$emit('remove', this.todo.id);
    }
  }
});
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 5px;
}
</style>