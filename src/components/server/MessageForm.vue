<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { InputGroup, InputGroupAddon, Button, InputText } from 'primevue';

const text_box = ref<InstanceType<typeof InputText> & { $el: HTMLInputElement } | null>(null);
const message = ref(``);
const send = () => {
	console.log(`sent message`, message.value);

};

const handleKeyPress = (e:KeyboardEvent) => {
	console.log(`n`, text_box.value!.$el.nodeName, e);
	if (document.activeElement != text_box.value!.$el){
		text_box.value!.$el.focus();
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
	<InputText ref="text_box" placeholder="Type to send a message" v-model="message" />
	<InputGroupAddon>
		<Button icon="pi pi-send" severity="secondary" variant="text" @click="send" />
	</InputGroupAddon>
</InputGroup>
</template>