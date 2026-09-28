import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const srcFile = path.join(projectRoot, "bin", "index.js");
const distDir = path.join(projectRoot, "dist");
const distFile = path.join(distDir, "index.js");

// Ensure output directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy entrypoint to dist directory
fs.copyFileSync(srcFile, distFile);

// Set executable permissions if on Unix-like environments
try {
  fs.chmodSync(distFile, 0o755);
} catch {
  // Ignored on systems that do not support POSIX file mode
}

console.log("Built dist/index.js successfully.");
