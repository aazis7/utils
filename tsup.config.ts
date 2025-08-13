import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/string/index.ts',
    'src/number/index.ts',
    'src/object/index.ts',
    'src/time/index.ts',
    'src/validate/index.ts',
  ],
  outDir: 'dist',
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  bundle: true,
  minify: 'terser',
  sourcemap: false,
  treeshake: true,
  target: 'es2022',
  terserOptions: {
    compress: { drop_console: true, drop_debugger: true },
    mangle: true,
    format: { comments: false },
  },
})
