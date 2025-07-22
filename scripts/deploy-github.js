const ghpages = require("gh-pages");
ghpages.publish(
  "build",
  {
    branch: "gh-pages",
    
    repo: "https://github.com/Henryk91/henryk91.github.io.git",
  },
  () => {
    console.log("Deploy Complete!");
  }
);
