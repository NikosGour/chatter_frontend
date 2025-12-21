<script setup lang="ts">
import type Tab_t from '@/types/tab';
import Tab from './Tab.vue';
import { ref } from 'vue';
import { GetTabsByServerId } from '@/services/server';

type Props = {
	server_id: string
}
const props = defineProps<Props>()

let tabs = ref<Tab_t[] | null>(null)

const fetchUsers = async () => {
	const us = await GetTabsByServerId(props.server_id)
	console.log('Fetched tabs:', us)
	tabs.value = us
}

fetchUsers()

</script>

<template>
	<div class="bg-green-400 w-full flex flex-col px-3 pt-1">
		<div v-if="tabs" v-for="tab in tabs" :key="tab.id">
			<Tab :tab="tab" />
		</div>
	</div>
</template>

<style scoped></style>