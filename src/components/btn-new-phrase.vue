<template>
  <v-btn class="bg-success mt-3 mx-auto d-block" @click="generate" :loading="loading" >
    PRÓXIMA
  </v-btn>
</template>

<script setup>
    import { ref, watch } from 'vue';

    const loading = ref(false);
    const emit = defineEmits(['generatePhrase']);

    const props = defineProps({ generated: Boolean });

    watch(() => props.generated, (newValue) => {
        console.log(newValue)
        loading.value = newValue; 
    });

    const generate = () => {
        emit('generatePhrase');
    };
</script>
