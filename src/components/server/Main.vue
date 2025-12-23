<script setup lang="ts">
import type Server from '@/types/server';
import MessageList from './MessageList.vue';

type Props = {
	server: Server
};
const props = defineProps<Props>();

</script>
<template>
	<div class="bg-blue-400 w-full flex-col ">
		<p class="bg-gray-600 text-lg px-3">{{ props.server.name }}</p>
		<MessageList :server_id="props.server.id"/>
	</div>
</template>

<style scoped></style>