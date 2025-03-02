// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'lightTheme',
            themes: {
                lightTheme: {
                    dark: false,
                    colors: {
                        primary: '#A1E3F9',
                        secondary: '#D1F8EF',
                        darken1: "#578FCA",
                        darken2: "#3674B5"
                    }
                },
                darkTheme: {
                    dark: true,
                    colors: {
                        primary: '#A5C9CA',
                        secondary: '#E7F6F2',
                        darken1: "#395B64",
                        darken2: "#2C3333"
                    }
                }
            }
        }
    })
    app.vueApp.use(vuetify)
})
