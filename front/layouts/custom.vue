<template>

    <v-row justify="start" class="ma-2">
        <v-col cols="auto">
            <NuxtLink to="/vuetify">
                <v-btn density="compact">1</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/todo">
                <v-btn density="compact">2</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/price">
                <v-btn density="compact">3</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/test">
                <v-btn density="compact">4</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/componentTest">
                <v-btn density="compact">5</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/componentTest2">
                <v-btn density="compact">6</v-btn>
            </NuxtLink>
        </v-col>
    </v-row>
    
    <div>
        
        <!-- named slot -->
        <slot />
    </div>
</template>


  