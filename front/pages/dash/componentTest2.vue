<template>
  <v-container>
    <v-row>
      <v-col
        cols="5"
      >
      <v-date-input 
        label="Start Date"
        v-model="date.start"
      ></v-date-input>
      </v-col>
      <v-col
        cols="5"
      >
      <v-date-input 
        label="End Date"
        v-model="date.end"
      ></v-date-input>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        @click="setDate"
      >
        Button
      </v-btn>
    </v-row>
  </v-container>


    
</template>
<script setup lang="ts">
  import { ref } from "vue"

  definePageMeta({
    middleware: ['auth']
  })

  const date = ref({
    start: null,
    end: null,
  })

  function setDate(){
    console.log(date.value)
  }
  
</script>