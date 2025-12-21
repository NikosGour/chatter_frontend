<script setup lang="ts">
import type Tab from '@/types/tab';


type Props = {
	tab: Tab
}
const props = defineProps<Props>()
</script>

<template>
	<div class="bg-red-400 rounded border shadow mb-1.5 m p-1 truncate">{{ props.tab.name }}</div>
</template>