<template>

    <Languages 
        @languageSelected="updateLanguage" 
    />
    
    <Main 
        v-if="selectedLanguage != null" 
        :data="data" 
        @startListening="startListening"
        @stopListening="stopListening"
        :btnStartAudioDisabled="btnStartAudioDisabled"
        :btnStopAudioDisabled="btnStopAudioDisabled"
    />
    
    <BtnNewPhrase 
        v-if="selectedLanguage != null" 
        @generatePhrase="generatePhrase" 
        :generated="generated" 
    />

</template>

<script setup>
    import Languages from "@/components/languages.vue";
    import Main from "@/components/main.vue";
    import BtnNewPhrase from "@/components/btn-new-phrase.vue";
    import { ref, onMounted } from "vue";

    const data = ref(null);
    const selectedLanguage = ref(null);
    const generated = ref(null); 
    const btnStartAudioDisabled = ref(true);
    const btnStopAudioDisabled = ref(true);

    const updateLanguage = (lang) => {
        selectedLanguage.value = lang;
        generatePhrase();
    };

    const generatePhrase = async () => {
        if (!selectedLanguage.value) return;

        data.value = null;
        generated.value = true; 

        const prompt = `Create a short ${selectedLanguage.value} text for intermediate-level learners. Provide only the ${selectedLanguage.value} text followed by its Portuguese (pt-BR) translation, using this exact format: text == translation. Do not include any introductions, titles, or explanations. Only return the text in the format above.`;

        try {
            const response = await puter.ai.chat(prompt, { model: "gpt-4o" });
            data.value = response.message.content;
        } catch (error) {
            console.error("Erro ao gerar frase:", error);
        } finally {
            generated.value = false;
            btnStartAudioDisabled.value = false;
        }
    };
    const speech = ref(null);

    const startListening = () => {
        btnStartAudioDisabled.value = true;
        btnStopAudioDisabled.value = false;

        let options = selectVoice(selectedLanguage.value)
        puter.ai.txt2speech(data.value.split('==')[0], options).then((audio)=>{
            speech.value = audio;
            audio.play();
            audio.addEventListener('ended', () => {
                btnStartAudioDisabled.value = false;
                btnStopAudioDisabled.value = true;

            });
        });
    }
    const stopListening = () => {
        btnStartAudioDisabled.value = false;
        btnStopAudioDisabled.value = true;
        speech.value.pause();
    }
  
    const selectVoice = (lang) => {
    switch (lang) {
        case "English":
            return { voice: "Stephen", engine: "neural", language: "en-US" };
            break;
        case "Mandarin Chinese":
            return { voice: "Zhiyu", engine: "neural", language: "cmn-CN" };
            break;
        case "Spanish":
            return { voice: "Lucia", engine: "neural", language: "es-ES" };
            break;
        case "Hindi":
            return { voice: "Kajal", engine: "neural", language: "hi-IN" };
            break;
        case "French":
            return { voice: "Rémi", engine: "neural", language: "fr-FR" };
            break;
        case "Arabic":
            return { voice: "Zeina", language: "ar-SA" };
            break;
        case "Russian":
            return { voice: "Tatyana", language: "ru-RU" };
            break;
        case "German":
            return { voice: "Daniel", engine: "neural", language: "de-DE" };
            break;
        case "Japanese":
            return { voice: "Tomoko", engine: "neural", language: "ja-JP" };
            break;
        case "Turkish":
            return { voice: "Burcu", engine: "neural", language: "tr-TR" };
            break;
        case "Korean":
            return { voice: "Seoyeon", engine: "neural", language: "ko-KR" };
            break;
        case "Italian":
            return { voice: "Adriano", engine: "neural", language: "it-IT" };
            break;
        default:
            return { voice: "Stephen", engine: "neural", language: "en-US" };
            break;
    }
};




    onMounted(() => generatePhrase());
</script>


