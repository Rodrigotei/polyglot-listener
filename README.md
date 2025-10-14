<h1 align="center">🌎 Polyglot Listener</h1>
<p align="center">
🎧 <b>Pratique o Listening em Diversos Idiomas com IA</b>  
<br>
Feito com <b>Vue 3</b> + <b>Vuetify</b> + <b>Puter.js</b> + <b>GPT-4o</b>
</p>

---

## 🎯 Objetivo

O **Polyglot Listener** é um app interativo para estudantes de idiomas que desejam melhorar sua **compreensão auditiva (listening)** e **leitura**.  
Ele gera frases curtas em diversos idiomas com **tradução automática para português** e **narração realista** usando vozes neurais nativas.

---

## 🧠 Como Funciona

1. 🌐 O usuário seleciona um idioma.  
2. 🤖 O app faz uma requisição à **API Puter.js** (modelo **GPT-4o**) para gerar:
   - Uma frase no idioma escolhido.
   - Sua tradução para **pt-BR**.
3. 🔊 O usuário pode:
   - **Ouvir a narração** da frase com voz nativa.
   - **Mostrar/ocultar** a tradução.
   - **Gerar nova frase** com o botão “Next”.
4. 🧩 Tudo isso com uma interface leve, moderna e responsiva (Vuetify 3).

---

## 🗣️ Idiomas Suportados

| 🌍 Idioma | 🗣️ Voz | 🏷️ Código |
|-----------|---------|------------|
| 🇺🇸 English | Stephen | en-US |
| 🇨🇳 Mandarin Chinese | Zhiyu | cmn-CN |
| 🇪🇸 Spanish | Lucia | es-ES |
| 🇮🇳 Hindi | Kajal | hi-IN |
| 🇫🇷 French | Rémi | fr-FR |
| 🇸🇦 Arabic | Zeina | ar-SA |
| 🇷🇺 Russian | Tatyana | ru-RU |
| 🇩🇪 German | Daniel | de-DE |
| 🇯🇵 Japanese | Tomoko | ja-JP |
| 🇹🇷 Turkish | Burcu | tr-TR |
| 🇰🇷 Korean | Seoyeon | ko-KR |
| 🇮🇹 Italian | Adriano | it-IT |

> 🎧 Cada idioma utiliza uma voz **neural nativa** e natural, garantindo uma experiência auditiva realista.

---

## 🧩 Tecnologias

| Tecnologia | 
|-------------|
| ⚡ **Vue 3 (Composition API)** |
| 🎨 **Vuetify 3** |
| 🤖 **Puter.js** |
| 🧠 **GPT-4o** |
| 🔊 **HTMLAudioElement** |

---

## 🚀 Instalação e Execução

### ⚙️ Pré-requisitos
- Node.js **18+**
- npm ou yarn

### 🧱 Instalação

```bash
# Clone o repositório
git clone https://github.com/Rodrigotei/polyglot-listener.git

# Entre na pasta
cd polyglot-listener

# Instale as dependências
npm install
