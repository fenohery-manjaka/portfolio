import { createApp } from 'vue'

import '@fontsource-variable/newsreader/opsz.css'
import '@fontsource-variable/newsreader/opsz-italic.css'
import '@fontsource/martian-mono/400.css'
import './style.css'

import App from './App.vue'
import { reveal } from './directives/reveal.js'

createApp(App).directive('reveal', reveal).mount('#app')
