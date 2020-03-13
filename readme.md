Used to caculate line of code(LOC) of github repository.

## CLI
It can be used like this:
```bash
node index.js bitcoin/bitcoin
```

there're 2 optional argument:
- `--detail`
- `--token`

Print the detail count of each langauge:
```bash
node index.js bitcoin/bitcoin --detail
```

add github token to increase limit
```bash
node index.js bitcoin/bitcoin --token ******
```

request github token on page: https://github.com/settings/tokens
<img src="https://i.ibb.co/BKVmpwF/image.png" alt="image" border="0">

## import module
This library can be imported directly in nodejs, and need bundling tool in web browser.
