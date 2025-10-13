<template>
	<v-card class="mt-3 pa-1">
		<v-card-title class="text-center">Choose language:</v-card-title>
		<v-select 
			class="pa-4"  :items="displayLanguages" label="Select" v-model="selectedLanguage"
			:menu-props="{ scrim: true, scrollStrategy: 'close' }" @update:model-value="emitLanguage"
			item-title="display" item-value="en"  
		/>
		<v-card-text class="text-center">
			<div v-if="selectedLanguage">Selected Language:  <strong class="text-info">{{ selectedLanguage }}</strong> </div>
		</v-card-text>
	</v-card>
</template>

<script setup>
import { ref, computed } from 'vue';
	const emit = defineEmits(["languageSelected"]);

	const languages = [
		{ en: "English", pt: "Inglês" },
		{ en: "Mandarin Chinese", pt: "Chinês Mandarim" },
		{ en: "Spanish", pt: "Espanhol" },
		{ en: "Hindi", pt: "Hindi" },
		{ en: "French", pt: "Francês" },
		{ en: "Arabic", pt: "Árabe" },
		{ en: "Bengali", pt: "Bengali" },
		{ en: "Russian", pt: "Russo" },
		{ en: "Urdu", pt: "Urdu" },
		{ en: "Indonesian", pt: "Indonésio" },
		{ en: "German", pt: "Alemão" },
		{ en: "Japanese", pt: "Japonês" },
		{ en: "Turkish", pt: "Turco" },
		{ en: "Korean", pt: "Coreano" },
		{ en: "Italian", pt: "Italiano" },
		{ en: "Vietnamese", pt: "Vietnamita" },
		{ en: "Thai", pt: "Tailandês" },
		{ en: "Persian Farsi", pt: "Persa Farsi" },
		{ en: "Swahili", pt: "Suaíli" },
	];
	const displayLanguages = computed(() => {
		return languages.map(lang => ({
			display: `${lang.en} - ${lang.pt}`,
			en: lang.en,
			pt: lang.pt 
		}));
	});

	const selectedLanguage = ref("");

	const emitLanguage = () => {
		emit("languageSelected", selectedLanguage.value);
	};
</script>
