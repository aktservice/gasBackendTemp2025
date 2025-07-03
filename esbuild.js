import esbuild from "esbuild";
import { GasPlugin } from "esbuild-gas-plugin";
esbuild
  .build({
    entryPoints: ["./src/main.ts"],
    bundle: true,
    minify: false,
    outfile: "./dist/main.js",
    target: "ES2021",
    plugins: [GasPlugin],
    legalComments: "inline", // この行を追加
    charset: "utf8",
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
