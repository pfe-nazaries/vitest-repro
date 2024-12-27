import { defineConfig } from "vitest/config";

export default defineConfig(() =>
    defineConfig({
        test: {
            setupFiles: "./src/vitest-setup.ts",
            environment: "happy-dom",
            globals: true,
            css: false,
            restoreMocks: true,
            unstubEnvs: true,
            unstubGlobals: true,
        },
    }),
);
