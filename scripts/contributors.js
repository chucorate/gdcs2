const fs = require("fs");
const yaml = require("js-yaml");

const CONTRIBUTORS_FILE = "data/contributors.yaml";

function sanitizeContributors(contributors) {
  const safeUsernames = {};

  for (const contributor of contributors) { // TODO: decide displaynames here
    const safeUsername = (contributor.username
      .replace(/^[._\-]+|[._\-]+$/g, "")  // remove initial and final non alphanumeric symbols
      .replace(/[^A-Za-z0-9_.-]+/g, "-")  // replaces non-url safe characters with hyphens
    );
    safeUsernames[contributor.username] = safeUsername;
  };

  return safeUsernames;
}

function rewriteContributors(frontmatter) {
  frontmatter.contributors = frontmatter.contributors.map(username => {
    const safeUsername = safeUsernames[username]
    if (!safeUsername) {
      console.error("Unknown contributor:", username);
      process.exit(1);
    }
    return safeUsername;
  });

  const newFrontmatter =
    "---\n" +
    yaml.dump(frontmatter, {lineWidth: -1}) +
    "---";

  return newFrontmatter;
}

const contributors = yaml.load(fs.readFileSync(CONTRIBUTORS_FILE, "utf8"));
const safeUsernames = sanitizeContributors(contributors);

module.exports = rewriteContributors;
