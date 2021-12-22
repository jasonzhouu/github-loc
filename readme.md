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
<img src="https://camo.githubusercontent.com/b39d8fca0e7cc4dceb2a3f527146d7a25a9f5e8abd8ab82686685353c0083a7b/68747470733a2f2f692e6962622e636f2f424b566d7077462f696d6167652e706e67" alt="image" border="0">

[npm-image]: https://flat.badgen.net/npm/v/github-loc
[npm-url]: https://www.npmjs.com/package/github-loc
[install-size-image]: https://flat.badgen.net/packagephobia/install/github-loc
[install-size-url]: https://packagephobia.now.sh/result?p=github-loc
