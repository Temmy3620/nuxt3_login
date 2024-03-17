<template>
    <h2>タスク追加</h2>
    <input v-model="taskName">
    <button @click="addTask">追加</button>
</template>

<script setup lang="ts">
    interface Emit {
        (event: 'add', value: string): void;
    }
    const emit = defineEmits<Emit>()

    const taskName = ref<string>('')

    const addTask = () => {
        if (taskName.value !== '') {
            emit('add', taskName.value)
        }
        taskName.value = ''
    }
</script>
  
  