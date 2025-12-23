<script setup lang="ts">
import type User from '@/types/user';
import { Chip } from 'primevue';

type Props = {
	user: User
};
const props = defineProps<Props>();

</script>
<template>
	<Chip class="w-full mb-1.5">
		<span class="truncate">{{ props.user.username }}</span>
		<span class="text-white bg-green-700 rounded-full w-14 h-8 flex items-center justify-center">P</span>
	</Chip>
	<!-- <div class="bg-red-400 rounded border shadow mb-1.5 p-1 truncate">{{ props.user.username }}</div> -->
</template>