import { $ } from "bun";
import ora from "ora";

const buildSpinner = ora("Building site...").start();

await $`bunx vite build`.quiet();

buildSpinner.succeed("Site built!");

const deploySpinner = ora("Deploying site...").start();

await $`netlify deploy --prod --dir=dist`.quiet();

deploySpinner.succeed("Site has been deployed!");
console.log("https://de-17-verdensml.netlify.app");

process.exit(0);
