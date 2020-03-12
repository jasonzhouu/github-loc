Used to caculate line of code(LOC) of github repository.

## CLI
It can be used like this:
```javascript
node index.js bitcoin/bitcoin
```

It request github code frequency API under the hood. If you need request more frequently, a github token is needed.
```javascript
node index.js bitcoin/bitcoin your-github-token
```

<img src="https://i.ibb.co/KbJSbLD/image.png" alt="image" border="0">

## import module
This library can be imported directly in nodejs, and need bundling tool in web browser.
