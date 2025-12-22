<script setup lang="ts">
import type User from '@/types/user';

type Props = {
	user: User
};
const props = defineProps<Props>();

</script>
<template>
	<div class="bg-red-400 rounded border shadow mb-1.5 p-1 truncate">{{ props.user.username }}</div>
</template>