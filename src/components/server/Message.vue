<script setup lang="ts">
import type Message from '@/types/message';


type Props = {
	message: Message
};
const props = defineProps<Props>();

</script>
<template>
	<div class="bg-emerald-600 flex gap-3 w-fit rounded p-2">
		<p class="text-3xl font-bold">{{ props.message.text }}</p>
		<p class="text-3xl">{{ props.message.sender.username}}</p>
	</div>
</template>