// scripts/create-404.mjs
import { copyFile } from "fs/promises";
import path from "path";

const src = path.resolve("./dist/index.html");
const dest = path.resolve("./dist/404.html");

try {
  await copyFile(src, dest);
  console.log("Copied index.html -> 404.html");
} catch (err) {
  console.error("Copy failed:", err);
  process.exit(1);
}
