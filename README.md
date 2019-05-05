# Webpack

Playing with webpack.

## Links

- [Comparison with others](https://webpack.js.org/comparison/)
- [Webpack insides](https://github.com/TheLarkInn/artsy-webpack-tour)
- [Critical-path css tools](https://github.com/addyosmani/critical-path-css-tools)
- [The 100% correct way to split your chunks with Webpack](https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758)

## Loader Definitions

```
module.exports = {
...
  module: {
    rules: [
      {
        // **Conditions**
        // Match files against RegExp or a function.
        test: /\.js$/,
        // **Restrictions**
        // Restrict matching to a directory. This
        // also accepts an array of paths or a function.
        // The same applies to `exclude`.
        include: path.join(__dirname, 'app'),
        exclude(path) {
        // You can perform more complicated checks
        // through functions if you want.
        return path.match(/node_modules/);
        },
        // **Actions**
        // Apply loaders the matched files.
        use: 'babel-loader',
      },
    ],
  },
};
```

> It’s good to keep in mind that _webpack’s_ loaders are always evaluated from **right to left** and from **bottom to top** (separate definitions).

### Enforcing

```
{
  // Conditions
  test: /\.js$/,
  enforce: 'pre', // 'post' too
  // Actions
  loader: 'eslint-loader',
},
```

### Passing Parameters to a Loader

```
{
  // Conditions
  test: /\.js$/,
  include: PATHS.app,
  // Actions
  use: 'babel-loader?cacheDirectory,presets[]=es2015',
},
```

### Different options

```
{
  // Conditions
  test: /\.js$/,
  include: PATHS.app,
  // Actions
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: ['react', 'es2015'],
  },
},
```

```
{
  // Conditions
  test: /\.js$/,
  include: PATHS.app,
  // Actions
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['react', 'es2015'],
    },
  },
},
```

```
{
  test: /\.js$/,
  include: PATHS.app,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['react', 'es2015'],
      },
    },
    // Add more loaders here
  ],
},
```

```
{
  test: /\.css$/,
  // resource refers to the resource path matched.
  // resourceQuery contains possible query passed to it (?sourceMap)
  // issuer tells about match context path
  use: ({ resource, resourceQuery, issuer }) => {
    // You have to return either something falsy,
    // string (i.e., 'style-loader'), or an object from here.
    //
    // Returning an array fails! To get around that,
    // it's possible to nest rules.
    if (env === 'development') {
      return {
        // Trigger css-loader first
        loader: 'css-loader',
        rules: [
          // And style-loader after it
          'style-loader',
        ],
      };
    }
  ...
  },
},
```

### Inline Definitions

```
// Process foo.png through url-loader and other
// possible matches.
import 'url-loader!./foo.png';
// Override possible higher level match completely
import '!!url-loader!./bar.png';
```

## Source maps

```
module.exports = {
...
  devtool: 'source-map'
};
```

### Types

- source-map _(separate, quality)_
- cheap-source-map _(separate, performance)_
- cheap-module-source-map _(separate, performance)_
- hidden-source-map _(?)_
- eval _(include in path, quality)_
- cheap-eval-source-map _(include in base64, performance)_
- cheap-module-eval-source-map _(include in base64, performance)_
- eval-source-map _(include in base64, quality)_

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

## Targets

- Web
- Webworker
- Node
- Desktop
