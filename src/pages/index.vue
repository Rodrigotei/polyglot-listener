<template>
  <Languages @languageSelected="updateLanguage" />
  <Main :data="data" />
  <BtnNewPhrase
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
        }
    };

    onMounted(() => generatePhrase());
</script>
