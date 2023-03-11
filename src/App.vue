<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
	<HelloWorld
		msg="Vite 4 + Vue 3 + Vuetify 3 + TypeScript + Husky + SASS + Tailwind CSS + ESLint + Prettier + Vitest + Testing Library"
	/>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
