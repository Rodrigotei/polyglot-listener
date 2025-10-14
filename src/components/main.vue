<template>
    <v-card class="mt-3 pa-4">
        <v-card-title class="text-center text-pre-wrap">{{ content.phrase || 'loading...' }}</v-card-title>
        <v-card-text class="text-primary text-center text-body-2 mt-4" v-if="displayTranslate">{{ content.translate || 'loading...' }}</v-card-text>
        
        <v-card-actions class="d-flex justify-center">
            <v-btn icon="mdi mdi-volume-high" @click="startListening" :disabled="btnStartAudioDisabled"></v-btn>
            <v-btn icon="mdi mdi-stop" @click="stopListening" :disabled="btnStopAudioDisabled"></v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-btn class="bg-primary d-block mx-auto" v-if="!displayTranslate" @click="displayTranslate = !displayTranslate">Mostrar tradução</v-btn>
            <v-btn class="bg-primary d-block mx-auto" v-else @click="displayTranslate = !displayTranslate">Ocultar Tradução</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const props = defineProps({ 
        data: String, 
        btnStartAudioDisabled:Boolean, 
        btnStopAudioDisabled: Boolean
    });

    const content = ref({phrase: null, translate: null})
    const displayTranslate = ref(false)

    const btnStartAudioDisabled = ref(props.btnStartAudioDisabled);
    const btnStopAudioDisabled = ref(props.btnStopAudioDisabled);

    watch(() => props.data, (newValue) => {
        if (newValue) {
            content.value = {phrase: null, translate: null}
            let n = newValue.split('==')
            content.value.phrase = n[0]
            content.value.translate = n[1]
        }
    },
    { immediate: true })
    
    watch(()=> props.btnStartAudioDisabled, (newValue)=>{
        btnStartAudioDisabled.value = newValue;
    });
    watch(()=> props.btnStopAudioDisabled, (newValue)=>{
        btnStopAudioDisabled.value = newValue;
    });

    const emit = defineEmits(["startListening", "stopListening"])
    
    const startListening = () => {  emit("startListening");  }
    const stopListening = () => { emit("stopListening"); }

</script>


