<template>
  <div>
    <h1>ToDoApp</h1>
    <AddTask @add="addTask" />
    <TaskList :task-name-list="taskNameList" @complete="completeTask" />
  </div>
</template>

<script setup lang="ts">
import { TestService } from '@/composables/test'

const testService = new TestService();

testService.fetchData();

const taskNameList = ref<string[]>([]);


const addTask = (taskName: string) => {
  taskNameList.value.push(taskName);
  console.log(taskNameList);
  
  testService.putData(taskName);
  
}

const completeTask = (newTaskNameList: string[]) => {
  taskNameList.value = newTaskNameList;
}


</script>