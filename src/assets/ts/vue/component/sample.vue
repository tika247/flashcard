<template>
    <p class="sample" :class="{ isSample :'is-sample' }">{{this.sampleText}}</p>
</template>

<script setup lang="ts">
const isSample:boolean = true;
const sampleText: string = isSample ? 'Sample-Component' : 'isSample is false';
</script>


<style scoped lang="scss">
.sample {
    font-size: 32rem;
    text-align: center;
    font-weight: bold;
}
</style>