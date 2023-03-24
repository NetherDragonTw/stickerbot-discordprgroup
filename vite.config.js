import { defineconfig } from 'vite'
import path from 'path'

export default defineconfig({
    resolve: {
        alias: {
        '@': path.resolve(__dirname,'./src'),
        }
    },
})