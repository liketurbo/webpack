# Webpack

Playing with webpack.

## Links

- [Comparison with others](https://webpack.js.org/comparison/)
- [Webpack insides](https://github.com/TheLarkInn/artsy-webpack-tour)
- [Critical-path css tools](https://github.com/addyosmani/critical-path-css-tools)
- [The 100% correct way to split your chunks with Webpack](https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758)

## Optimization

### Low-Level Optimizations

- Consider using faster source map variants during development or skip them. Skipping is
  possible if you don’t process the code in any way.
- Use babel-preset-env during development instead of source maps to transpile fewer features for
  modern browsers and make the code more readable and easier to debug.
- Skip polyfills during development. Attaching a package, such as babel-polyfill, to the
  development version of an application adds to the overhead.
- Disable the portions of the application you don’t need during development. It can be a valid idea
  to compile only a small portion you are working on as then you have less to bundle.
- Push bundles that change less to Dynamically Loaded Libraries (DLL) to avoid unnecessary
  processing. It’s one more thing to worry about, but can lead to speed increases as there is less to
  bundle. The official webpack example gets to the point while Rob Knight’s blog post explains
  the idea further.

### Loader and Plugin Specific Optimizations

- Perform less processing by skipping loaders during development. Especially if you are using a
  modern browser, you can skip using babel-loader or equivalent altogether.
- Use either include or exclude with JavaScript specific loaders. Webpack traverses
  node_modules by default and executes babel-loader over the files unless it has been configured
  correctly.
- Utilize caching through plugins like hard-source-webpack-plugin to avoid unnecessary work.
  The caching idea applies to loaders as well. For example, you can enable cache on babel-loader.
- Use equivalent, but lighter alternatives, of plugins and loaders during development. Replacing
  HtmlWebpackPlugin with a HtmlPlugin that does far less is one direction.
- Consider using parallel variants of plugins if they are available. webpack-uglify-parallel is one
  example.
