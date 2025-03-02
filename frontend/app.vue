<template>
    <v-app>
        <v-btn class="bg-black" @click="toggleTheme">
            Toogle theme
        </v-btn>
        <div class="bg-primary text-center" style="height: 100px;">
            <p class="my-10">Primary</p>
        </div>
        <div class="bg-secondary text-center" style="height: 100px;">
            <p class="my-10">Secondary</p>
        </div>
        <div class="bg-darken1 text-center" style="height: 100px;">
            <p class="my-10">Darken1</p>
        </div>
        <div class="bg-darken2 text-center" style="height: 100px;">
            <p class="my-10">Darken2</p>
        </div>
    </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}
</script>