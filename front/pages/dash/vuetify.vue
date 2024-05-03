<template>
    <v-radio-group>
      <v-radio label="Radio One" value="one"></v-radio>
      <v-radio label="Radio Two" value="two"></v-radio>
      <v-radio label="Radio Three" value="three"></v-radio>
    </v-radio-group>
</template>
<script setup lang="ts">
    const message = 'Hello! TypeScript!';
    const bigNumber: bigint = 100n;

    console.log("--------------------------------");
    console.log(message);
    console.log(bigNumber);
    console.log("--------------------------------");

</script>