<script setup lang="ts">
import type User_t from '@/types/user';
import { ref } from 'vue';
import User from './User.vue';
import { GetUsersByServerId } from '@/services/server';

type Props = {
	server_id: string
};
const props = defineProps<Props>();

const users = ref<User_t[] | null>(null);

const fetchUsers = async() => {
	const us = await GetUsersByServerId(props.server_id);
	console.log(`Fetched users:`, us);
	users.value = us;
};

fetchUsers();
</script>
<template>
	<div class="bg-amber-400 w-full flex flex-col px-3 pt-1">
			<div  v-if="users" v-for="user in users" :key="user.id">
				<User :user="user" />
			</div>
	</div>
</template>

<style scoped></style>