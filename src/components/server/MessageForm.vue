<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { InputGroup, InputGroupAddon, Button, InputText } from 'primevue';


const message = ref(``);
const send = () => {
	console.log(`sent message`, message.value);
};

onMounted(() => {
	window.addEventListener(`keydown`, function(e){
		message.value += e.key;
	});
});
</script>

<template>
<InputGroup>
	<InputText placeholder="Type to send a message" v-model="message" />
	<InputGroupAddon>
		<Button icon="pi pi-send" severity="secondary" variant="text" @click="send" />
	</InputGroupAddon>
</InputGroup>
</template>