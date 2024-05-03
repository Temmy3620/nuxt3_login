<template>
  <v-row justify="start" class="ma-2">
    <v-col cols="8">
      <v-sheet elevation="6">
        <v-tabs
          bg-color="indigo"
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
        >
          <v-tab>
            hsdcjs
          </v-tab>
          <v-tab>
            hsdcjs2
          </v-tab>
        </v-tabs>
      </v-sheet>
    </v-col>
  </v-row>
  
    
</template>
<script setup lang="ts">
    const message = 'Component Test !!';

    console.log("--------------------------------");
    console.log(message);
    console.log("--------------------------------");

</script>