[![npm version][npm-image]][npm-url]
[![install size][install-size-image]][install-size-url]

Used to caculate line of code(LOC) of github repository.

## example
This library can be imported directly in nodejs, and need bundling tool in web browser.

```javascript
const githubLoc = require('github-loc');

const repoName = 'bitcoin/bitcoin';
const token = '****';

githubLoc({ repoName, token })
  .then((data) => {
    console.log(data);
  });
```

request github token on page: https://github.com/settings/tokens
<img src="https://i.ibb.co/BKVmpwF/image.png" alt="image" border="0">

[npm-image]: https://flat.badgen.net/npm/v/github-loc
[npm-url]: https://www.npmjs.com/package/github-loc
[install-size-image]: https://flat.badgen.net/packagephobia/install/github-loc
[install-size-url]: https://packagephobia.now.sh/result?p=github-loc
