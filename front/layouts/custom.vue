<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
            <NuxtLink to="/vuetify">
                <v-btn density="compact">Compact Button</v-btn>
            </NuxtLink>
        </v-col>
  
        <v-col cols="auto">
            <NuxtLink to="/todo">
                <v-btn density="comfortable">Comfortable Button</v-btn>
            </NuxtLink>
        </v-col>
  
        <v-col cols="auto">
            <NuxtLink to="/price">
                <v-btn density="default">Default Button</v-btn>
            </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
    <div>
        
        <!-- named slot -->
        <slot />
    </div>
</template>


  