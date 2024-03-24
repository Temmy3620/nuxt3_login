<template>
    <h2>タスク名</h2>
    <div v-for="taskName in taskNameList" :key="taskName">
        <p>
            {{ taskName }}<button @click="completeTask(taskName)">完了</button>
        </p>
    </div>
</template>

<script setup lang="ts">
    import { TestService } from '@/composables/test'

    const testService = new TestService();

    interface Props {
        taskNameList: string[]
    }
    
    interface Emit {
        (event: 'complete', value: string[]): void;
    }

    const props = defineProps<Props>();
    const emit = defineEmits<Emit>();

    const completeTask = (completedTaskName: string) => {
        const newTaskNameList = props.taskNameList.filter((taskName: string) => {
            return completedTaskName !== taskName;
        });
        emit('complete', newTaskNameList)
    }
</script>
  