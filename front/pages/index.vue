<template>
  <div>
    <h1>ToDoApp</h1>
    <AddTask @add="addTask" />
    <TaskList :task-name-list="taskNameList" @complete="completeTask" />
  </div>
</template>

<script setup lang="ts">
const taskNameList = ref<string[]>([]);
const addTask = (taskName: string) => {
  taskNameList.value.push(taskName);
  
  fetchData(taskName);
  
}
const completeTask = (newTaskNameList: string[]) => {
  taskNameList.value = newTaskNameList;
}
const fetchData = async (taskName: string) => {
  await useFetch('http://localhost:8000/api/tests', {
    method: 'POST',
    body: taskName,
  });
};

</script>