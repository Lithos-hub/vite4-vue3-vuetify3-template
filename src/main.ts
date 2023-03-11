import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { ThemeDefinition, createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const myCustomLightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		primary: '#fc4b6c',
		secondary: '#fb9778',
		black: '#0f172a',
	},
};

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'myCustomLightTheme',
		themes: {
			myCustomLightTheme,
		},
	},
});

createApp(App).use(vuetify).mount('#app');
