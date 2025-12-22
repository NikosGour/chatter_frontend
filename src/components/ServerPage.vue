<script setup lang="ts">
import Main from './server/Main.vue';
import TabList from './server/TabList.vue';
import UserList from './server/UserList.vue';

type Props = {
	server_id: string
};
const props = defineProps<Props>();
</script>

<template>
	<div class="grid grid-cols-[20%_60%_20%] h-screen">
		<UserList :server_id="props.server_id" />
		<Main />
		<TabList :server_id="props.server_id" />
	</div>
</template>

<style scoped></style>