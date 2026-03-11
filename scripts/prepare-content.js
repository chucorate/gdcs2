const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const rewriteContributors = require("./contributors.js");

const CONTENT_SRC = "content";
const CONTENT_DST = ".content-prebuild";


function extractFrontmatter(text) {
  const match = text.match(/^\s*---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const frontmatter = yaml.load(match[1]);
  const body = text.slice(match[0].length);

  return {
    frontmatter,
    body,
  };
}

// TODO: Run more tests
function processDir(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDir(filePath);
      continue;
    }

    if (!filePath.endsWith(".md")) continue;

    const text = fs.readFileSync(filePath, "utf8");
    const page = extractFrontmatter(text);

    if (!page) continue;

    if (Array.isArray(page.frontmatter.contributors)) {
      const newFrontmatter = rewriteContributors(page.frontmatter);
      fs.writeFileSync(filePath, newFrontmatter + page.body);
    }

  }
}

/* ---------- rebuild pipeline ---------- */

fs.rmSync(CONTENT_DST, {recursive: true, force: true});
fs.cpSync(CONTENT_SRC, CONTENT_DST, {recursive: true});

processDir(CONTENT_DST);

console.log(`${CONTENT_DST} folder created successfully`);