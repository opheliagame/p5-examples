// watch.js
import fs from "fs";
import path from "path";

const LIB_DIR = path.resolve("lib");
const DIST_DIR = path.resolve("dist");
const OUTPUT_FILE = path.join(DIST_DIR, "op-cc.js");

// Ensure dist exists
if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });

// --- Utility: Concatenate all JS files ---
function build() {
  const files = fs
    .readdirSync(LIB_DIR)
    .filter((f) => f.endsWith(".js"))
    .sort(); // alphabetical order

  const combined = files
    .map((f) => fs.readFileSync(path.join(LIB_DIR, f), "utf8"))
    .join("\n\n");

  fs.writeFileSync(OUTPUT_FILE, combined, "utf8");
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] Built ${files.length} files → ${OUTPUT_FILE}`);
}

// --- Debounce to prevent rebuild storms ---
let debounceTimer = null;
function scheduleBuild() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(build, 300); // 300ms debounce
}

// --- Initial build ---
build();

// --- Watch for changes (efficiently) ---
fs.watch(LIB_DIR, { recursive: true }, (event, filename) => {
  if (filename && filename.endsWith(".js")) {
    console.log(`Change detected: ${filename}`);
    scheduleBuild();
  }
});

console.log(`👀 Watching ${LIB_DIR} for changes...`);
