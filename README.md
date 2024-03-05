<p align="center">
<img src="https://i.imgur.com/LnPvZvO.png" alt="ADPlayer" width="100">
</p>
<h1 align="center">APlayer</h1>

> Wow, such a lovely HTML5 music player

TypeScript interface and ESM export for [APlayer](https://github.com/MoePlayer/APlayer/).

## Why this

1. TypeScript
2. ESM export (APlayer only exports its minified version built by Webpack, which is not friendly to custom code optimization)

APlayer relies on Webpack to import svg and art-template files. This package has already transformed these files into JavaScript code (see [utils](./utils)), so you don't need to worry about the compatibility of your bundler.

`APlayer.min.js` is still in `dist` folder, but by default this package exports `src/js/index.js`.

It also includes a patch which fixes [APlayer#283](https://github.com/DIYgod/APlayer/issues/283).

## Usage

```TypeScript
import APlayer from 'aplayer-ts'
import 'aplayer-ts/dist/APlayer.min.css'
```

Enjoy!

```TypeScript
const instance = new APlayer({ /* refer to the aplayer doc */ })
```
