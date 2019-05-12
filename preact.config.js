import { resolve } from 'path'

export default function (config, env, helpers) {
  config.resolve.alias.src = resolve(__dirname, './src')
  config.resolve.alias.components = resolve(__dirname, './src/components')
  config.resolve.alias.routes = resolve(__dirname, './src/routes')
  config.resolve.alias.style = resolve(__dirname, './src/style')
  config.resolve.alias.lib = resolve(__dirname, './src/lib')

  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  let babelConfig = rule.options;
  
  babelConfig.plugins.push('@babel/plugin-proposal-export-default-from');
  return config
}
