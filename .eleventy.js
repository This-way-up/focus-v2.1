const pluginSass = require("eleventy-plugin-sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {

  // Add plugins
  config.addPlugin(pluginSass, {
       watch: ["src/**/*.scss"]
  });
  config.addPlugin(syntaxHighlight);

  // Copy files
  config.addPassthroughCopy({
    "src/assets/img" : "assets/img",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" : "assets/js/bootstrap.js",
    "node_modules/zoom-vanilla.js/dist/zoom-vanilla.min.js" : "assets/js/zoom-vanilla.js",
    "src/assets/js" : "assets/js",
  });

  // Config options
  return {
    dir : {
      input: "src",
      output: "dist",
      layouts: "templates/layouts",
      includes: "templates/includes"
    },
    htmlTemplateEngine: "njk"
  }
};
