<script setup lang="ts">
import { GetMessagesByTabId } from '@/services/message';
import type Message_t from '@/types/message';
import { inject, ref, watch, type Ref } from 'vue';
import Message from './Message.vue';
import type Tab_t from '@/types/tab';
import { sleep } from '@/utils/sleep';
import { Injectables } from '@/utils/injectables';



const messages = ref<Message_t[] | null | `no-messages`>(null);

const active_tab = inject<Ref<Tab_t | null>>(Injectables.active_tab)!;

watch(active_tab, async(newTab) => {
	if (!newTab){
		return;
	}
	messages.value = null;
	await sleep(2 * 1000);

	fetchMessages(newTab.id);
});

const fetchMessages = async(tab_id: string) => {
	// await sleep(5 * 1000);
	if (!tab_id){
		messages.value = `no-messages`;
		return;
	}

	const us = await GetMessagesByTabId(tab_id);
	console.log(`Fetched messages:`, us);
	if (us.length == 0){
		messages.value = `no-messages`;
		return;
	}
	messages.value = us;
};


if (!active_tab.value){
	messages.value = `no-messages`;
}
else {
	fetchMessages(active_tab.value.id);
}
</script>

<template>
<div v-if="messages=='no-messages'" class="flex items-center justify-center h-full">
	<p class="tex-8xl bg-red-700">No messages available</p>
</div>
<div v-else-if="messages" v-for="message in messages" :key="message.id" class="flex flex-col items-end p-3 grow">
	<Message :message="message"/>
</div>
<div v-else class="flex items-center justify-center h-full">
	<p class="tex-8xl bg-red-700">Loading</p>
</div>
</template>