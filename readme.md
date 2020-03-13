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

