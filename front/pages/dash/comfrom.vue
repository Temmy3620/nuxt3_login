<template>
    <div>
        <h1>確認フォーム</h1>
        <hr />
    </div>
    
</template>
<script setup lang="ts">

    definePageMeta({
      middleware: ['auth']
    })
    
    const message = 'Confrom';
    

    console.log("--------------------------------");
    console.log(message);
    console.log("--------------------------------");

</script>