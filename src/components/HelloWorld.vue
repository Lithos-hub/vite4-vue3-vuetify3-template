<template>
	<h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
