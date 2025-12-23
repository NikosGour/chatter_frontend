<script setup lang="ts">
import type Server from '@/types/server';
import MessageList from './MessageList.vue';
import MessageForm from './MessageForm.vue';

type Props = {
	server: Server
};
const props = defineProps<Props>();

</script>
<template>
	<div class="bg-blue-400 w-full flex flex-col justify-between">
		<p class="bg-gray-600 text-lg px-3">{{ props.server.name }}</p>
		<MessageList/>
		<MessageForm class="px-3 pb-1"/>
	</div>
</template>

<style scoped></style>