<script setup lang="ts">
import type Server from '@/types/server';
import Main from './server/Main.vue';
import TabList from './server/TabList.vue';
import UserList from './server/UserList.vue';
import { provide, ref } from 'vue';
import { GetServerById } from '@/services/server';
import type Tab_t from '@/types/tab';
import { Injectables } from '@/utils/injectables';

type Props = {
	server_id: string
};
const props = defineProps<Props>();

const server = ref<Server | null>(null);

const active_tab = ref<Tab_t | null>(null);

provide(Injectables.active_tab, active_tab);

const fetchServer = async() => {
	const ser = await GetServerById(props.server_id);
	console.log(`Fetched users:`, ser);
	server.value = ser;
};

fetchServer();
</script>

<template>
	<div class="grid grid-cols-[20%_60%_20%] h-screen">
		<UserList :server_id="props.server_id" />
		<Main v-if="server" :server="server"/>
		<TabList  :server_id="props.server_id" />
	</div>
</template>

<style scoped></style>