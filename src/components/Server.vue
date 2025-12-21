<script setup lang="ts">
import Main from './server/Main.vue';
import Tabs from './server/Tabs.vue';
import Users from './server/Users.vue';

type Props = {
	server_id: string
}
const props = defineProps<Props>()
</script>

<template>
	<div class="grid grid-cols-[20%_60%_20%] h-screen">
		<Users :server_id="props.server_id" />
		<Main />
		<Tabs :server_id="props.server_id" />
	</div>
</template>

<style scoped></style>