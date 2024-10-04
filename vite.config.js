import { defineConfig, normalizePath } from 'vite';

import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

import { StartFunc as StartFuncGetFiles } from "./KCode/getFiles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SrcFolder = "src";

const FrontEndDistFolder = "publicDir/TableShow";

let files = StartFuncGetFiles({ inSrcPath: SrcFolder });

export default defineConfig((env) => ({
    publicDir: 'static',
    base: './',
    root: resolve(__dirname, SrcFolder),
    plugins: [
    ],
    resolve: {
        alias: {
            '@': normalizePath(resolve(__dirname, 'src')),
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            '~bootstrap-icons': resolve(__dirname, 'node_modules/bootstrap-icons'),
            '~perfect-scrollbar': resolve(__dirname, 'node_modules/perfect-scrollbar'),
            '~@fontsource': resolve(__dirname, 'node_modules/@fontsource'),
        }
    },
    build: {
        emptyOutDir: false,
        manifest: true,
        target: "chrome58",
        outDir: resolve(__dirname, FrontEndDistFolder),
        rollupOptions: {
            input: files,
            output: {
            }
        },
    }
}));