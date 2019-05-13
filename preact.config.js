import { resolve } from "path";
const netlifyPlugin = require("preact-cli-plugin-netlify");
import Critters from "critters-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default function(config, env, helpers) {
  config.resolve.alias.src = resolve(__dirname, "./src");
  config.resolve.alias.components = resolve(__dirname, "./src/components");
  config.resolve.alias.sections = resolve(__dirname, "./src/sections");
  config.resolve.alias.style = resolve(__dirname, "./src/style");
  config.resolve.alias.lib = resolve(__dirname, "./src/lib");

  let { rule } = helpers.getLoadersByName(config, "babel-loader")[0];
  let babelConfig = rule.options;

  config.plugins.push(new CopyPlugin([{ from: "./robots.txt", to: "./" }]));

  babelConfig.plugins.push("@babel/plugin-proposal-export-default-from");
  return netlifyPlugin(config);
}
