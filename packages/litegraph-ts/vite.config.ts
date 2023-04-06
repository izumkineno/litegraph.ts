import { resolve } from 'path';
import { defineConfig, LogLevel } from 'vite';

export default defineConfig({
    build: {
        outDir: "dist",
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: 'litegraph-ts',
            formats: ["es", "umd"],
            fileName: (format) => `index.${format}.js`
        },
    },
});
