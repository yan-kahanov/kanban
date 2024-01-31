<script setup>
const model = defineModel()
</script>

<template>
    <textarea v-model="model" class="py-3 px-4 border block w-full border-gray-200 rounded-lg text-sm hover:border-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-700 border-gray-700 text-gray-400 outline-none transition-all"></textarea>
</template>