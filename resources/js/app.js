require('./bootstrap');

import { createApp } from 'vue'
import ExampleComponent from './components/ExampleComponent.vue'
import AnotherComponent from './components/AnotherComponent.vue'

createApp({
    components: {
        ExampleComponent,
        AnotherComponent,
    }
}).mount('#app')
