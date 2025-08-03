import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
	entry: ["src/**"],
	outDir: "dist",
	clean: true,
	minify: true,
	format: ["cjs", "esm"],
	dts: true,
	splitting: true,
	treeshake: true,
	sourcemap: false,
	target: "es2022",
	bundle: false,
	...options,
}));
