<script setup lang="ts">
import type Tab_t from '@/types/tab';
import Tab from './Tab.vue';
import { inject, ref, type Ref } from 'vue';
import { GetTabsByServerId } from '@/services/server';

type Props = {
	server_id: string
};
const props = defineProps<Props>();


const tabs = ref<Tab_t[] | null>(null);

const active_tab = inject<Ref<Tab_t | null>>(`active_tab`)!;


const fetchTabs = async() => {
	const us = await GetTabsByServerId(props.server_id);
	console.log(`Fetched tabs:`, us);
	tabs.value = us;

	if (tabs.value && tabs.value.length > 0){
		active_tab.value = tabs.value[ 0 ]!;
	}
};

fetchTabs();

const setActiveTab = (tab: Tab_t) => {
	active_tab.value = tab;
};

</script>

<template>
	<div class="bg-green-400 w-full flex flex-col px-3 pt-1">
		<div v-if="tabs">
			<div v-for="tab in tabs" :key="tab.id">
				<Tab :is_active="active_tab?.id === tab.id" :tab="tab" @click="setActiveTab(tab)" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>