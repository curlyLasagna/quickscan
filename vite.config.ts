import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA({
        includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
        manifest: {
            "name": "ScanFast",
            "short_name": "ScanFast",
            "icons": [
                {
                    "src": "android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ],
            "theme_color": "#ffffff",
            "background_color": "#ffffff",
            "display": "standalone"
        },
        registerType: 'autoUpdate',
        devOptions: {
            enabled: true
        }
    })],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
