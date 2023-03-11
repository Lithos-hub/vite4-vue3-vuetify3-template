<template>
	<div
		class="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-200 to-blue-200"
	>
		<v-card elevation="10" class="rounded-xl w-1/2">
			<h1 class="text-7xl p-10 tracking-widest text-center">
				{{ msg }}
			</h1>
		</v-card>
	</div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>();
</script>
