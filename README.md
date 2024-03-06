<p align="center">
<img src="https://i.imgur.com/LnPvZvO.png" alt="ADPlayer" width="100">
</p>
<h1 align="center">APlayer-ts</h1>

> Wow, such a lovely HTML5 music player

Fully ESM version of [APlayer](https://github.com/MoePlayer/APlayer/) with TypeScript support. With Rollup and esbuild, [index.min.js](build/index.min.js) is 30%+ smaller than the original [APlayer.min.js](dist/APlayer.min.js), from 58KB to 38KB or less.

## Why this

See this [blog post](https://blog.liuly.moe/posts/tree-shaking).

1. TypeScript
2. ESM (APlayer only exports `APlayer.min.js`, which is not friendly to code optimization)

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
