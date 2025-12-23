<script setup lang="ts">
import type Tab from '@/types/tab';


type Props = {
	tab       : Tab
	is_active : boolean
};
const props = defineProps<Props>();
</script>

<template>
	<div :class="props.is_active ? 'bg-blue-400' : 'bg-red-400'" class="cursor-pointer rounded border shadow mb-1.5 m p-1 truncate">{{ props.tab.name }}</div>
</template>