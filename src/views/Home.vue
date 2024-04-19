<template>
    <h1>Home</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">secondary</button>
    <button @click="goToDaybook" class="btn btn-success">success</button>
</template>
<script setup>

import { useRouter } from 'vue-router';

const router = useRouter()

const goToDaybook = () => {
    router.push({name: 'daybook'})
}
</script>