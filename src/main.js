import { createApp } from 'vue'

import '@fontsource/bagel-fat-one/latin-400.css'
import '@fontsource/bagel-fat-one/latin-ext-400.css'
import '@fontsource/kalam/latin-400.css'
import '@fontsource/kalam/latin-700.css'
import '@fontsource-variable/atkinson-hyperlegible-next/wght.css'
import './style.css'

import App from './App.vue'
import { drag } from './directives/drag.js'

createApp(App).directive('drag', drag).mount('#app')
