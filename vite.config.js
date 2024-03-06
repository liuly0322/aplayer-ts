import { defineConfig } from "vite";
import path from "path";
import { transform } from 'esbuild';

function minifyEs() {
    return {
        name: 'minifyEs',
        renderChunk: {
            order: 'post',
            async handler(code, chunk, outputOptions) {
                if (outputOptions.format === 'es' && chunk.fileName.endsWith('.min.js')) {
                    return await transform(code, { minify: true });
                }
                return code;
            },
        }
    };
}

export default defineConfig({
    plugins: [minifyEs()],
    build: {
        reportCompressedSize: true,
        lib: {
            entry: path.resolve(__dirname, "src/js/index.js"),
            formats: ['es', 'esm'],
            fileName: (format) => ({
                es: 'index.js',
                esm: 'index.min.js',
            })[format]
        },
        outDir: "build",
    },
});