<template>
  <v-dialog max-width="500">
    
    <template v-slot:activator="{ props: activatorProps }">
      <v-row justify="center" no-gutters>
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="Open Dialog"
          variant="flat"
        ></v-btn>
      </v-row>
    </template>
    


    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close Dialog"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
    const message = 'Hello! TypeScript!';

    definePageMeta({
      middleware: ['auth']
    })

    console.log("--------------------------------");
    console.log(message);
    console.log("--------------------------------");

</script>
