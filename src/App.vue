<script setup lang="ts">
import { ref } from 'vue';
import ServerPage from './components/ServerPage.vue';
import type Server from './types/server.js';
import { GetServerById } from './services/server.js';
import { sleep } from './utils/sleep.js';

const server = ref<Server | null>(null);
const server_id = `6d17edd9-f15f-4001-83aa-9b2c6ce6ba9b`;
const fetchServer = async() => {
	await sleep(10 * 1000);
	const ser = await GetServerById(server_id);
	clearTimeout(timeout_id);
	console.log(`Fetched users:`, ser);
	server.value = ser;
};

fetchServer();

const hit_timeout = ref<boolean>(false);
const timeout = 5 * 1000;
const timeout_id = setTimeout(() => {
	hit_timeout.value = true;
}, timeout);
</script>

<template>
  <ServerPage v-if="server" :server="server"/>
  <div v-else-if="!hit_timeout" class="flex justify-center items-center w-screen h-screen">
	<span class="pi pi-spin pi-spinner" style="font-size: 3em;"></span>
  </div>
  <div v-else class="flex justify-center items-center w-screen h-screen bg-red-700">
	<span class="text-3xl font-bold text-white">
		<pre>
Could not connect to the server.
Please check your internet connection.
		</pre>
	</span>
  </div>
</template>

<style scoped></style>