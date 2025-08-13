import { defineConfig, type Options } from 'tsup'

export default defineConfig((options: Options) => ({
  entry: [
    'src/index.ts',
    'src/string/index.ts',
    'src/number/index.ts',
    'src/time/index.ts',
    'src/object/index.ts',
    'src/validate/index.ts',
  ],
  outDir: 'dist',
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  treeshake: true,
  target: 'es2022',
  bundle: false,
  minify: true,
  ...options,
}))
