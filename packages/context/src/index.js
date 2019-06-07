const target = 'ru';

setTimeout(() => {
  import(`./translations/ru.json`).then(res => console.log(res.default));
}, 2000);

setTimeout(() => {
  const req = require.context(
    'json-loader!yaml-frontmatter-loader!',
    true, // Load files recursively. Pass false to skip recursion.
    /.+\.md$/
  );

  console.log(req.keys());
}, 3000);
