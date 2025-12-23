<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { InputGroup, InputGroupAddon, Button, InputText } from 'primevue';

const message = ref(``);
const send = () => {
	console.log(`sent message`, message.value);
};

const handleKeyPress = (e:KeyboardEvent) => {
	const text_box = document.getElementById(`text_box`);
	if (!text_box){
		console.error(`missing input`);
	}
	else if (e.key === `Enter`){
		send();
	}
	else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey){
		if (document.activeElement != text_box){
			text_box.focus();
		}
	}
};

onMounted(() => {
	window.addEventListener(`keydown`, handleKeyPress);
});


onUnmounted(() => {
	window.removeEventListener(`keydown`, handleKeyPress);
});

</script>

<template>
<InputGroup>
	<InputText  placeholder="Type to send a message" v-model="message" :pt="{
		root:{
			id:`text_box`
		}
	}"/>
	<InputGroupAddon>
		<Button icon="pi pi-send" severity="secondary" variant="text" @click="send" />
	</InputGroupAddon>
</InputGroup>
</template>