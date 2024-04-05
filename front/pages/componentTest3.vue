<template>

    <v-container>

        <h1>{{ $t('hello') }} </h1>
        
        <v-row>
            <v-col cols="3">
                <v-select
                label="Select"
                v-model="$i18n.locale"
                :items="languages"
                item-title="title"
                item-value="value"
                variant="outlined"
                class="mt-5"
                ></v-select>
            </v-col>
        </v-row>
    </v-container>
    
    
    
    
</template>
<script setup lang="ts">
    const message = 'Component Test !!';
    const languages = [
      { title: 'English', value: 'en' },
      { title: '日本語', value: 'ja' },
    ];

    console.log("--------------------------------");
    console.log(message);
    console.log("--------------------------------");

</script>