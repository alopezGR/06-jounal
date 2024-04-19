<template>
    <Navbar />
    <div class="d-flex">
        <div class="col-4">
            <Entrylist></Entrylist>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'

const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'))
const Entrylist = defineAsyncComponent(() => import('../components/EntryList.vue'))
</script>