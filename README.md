<p align="center">
<img src="https://i.imgur.com/LnPvZvO.png" alt="ADPlayer" width="100">
</p>
<h1 align="center">APlayer-ts</h1>

> Wow, such a lovely HTML5 music player

Fully ESM version of [APlayer](https://github.com/MoePlayer/APlayer/) with TypeScript support. With Rollup and esbuild, [index.min.js](build/index.min.js) is 40% smaller than the original [APlayer.min.js](dist/APlayer.min.js), from 58KB to 34KB or less.

## Why this

See this [blog post](https://blog.liuly.moe/posts/tree-shaking).

1. TypeScript
2. ESM (APlayer only exports `APlayer.min.js`, which is not friendly to code optimization)
3. Tree-Shaking, currently support fixed mode:
   ```shell
   # not import enableFixedModeOnce
   demo_build/index.html                  1.95 kB │ gzip:  0.79 kB
   demo_build/assets/index-3p8iLQ3k.css  10.22 kB │ gzip:  2.19 kB
   demo_build/assets/index-xlvbhOM-.js   34.25 kB │ gzip: 10.05 kB
   # import enableFixedModeOnce
   demo_build/index.html                  1.95 kB │ gzip:  0.78 kB
   demo_build/assets/index-Bi0rxlmU.css  12.04 kB │ gzip:  2.47 kB
   demo_build/assets/index-0AXdi5OA.js   35.29 kB │ gzip: 10.12 kB
   ```

`APlayer.min.js` is still in `dist` folder, but by default this package exports `src/js/index.js`.

It also includes a patch which fixes [APlayer#283](https://github.com/DIYgod/APlayer/issues/283).

## Usage

```TypeScript
import APlayer from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'

// If you want fixed mode
// import { enableFixedModeOnce } from 'aplayer-ts'
// import 'aplayer-ts/src/css/fixed.css'
```

Enjoy!

```TypeScript
// if you want to enable fixed mode
// instead of set options in APlayer constructor, use:
// enableFixedModeOnce()
// add this call before each APlayer instance you want to enable fixed mode
const instance = new APlayer({ /* refer to the aplayer doc */ })
```

## Development

Demo website:

```bash
pnpm dev         # start a dev server
pnpm build:demo  # build the demo website (to see output size)
```

Package build:

```bash
pnpm build       # ./build/index.{min}.js
```

APlayer relies on Webpack to import svg and art-template files. This package has already transformed these files into JavaScript code (see [utils](./utils)), so you don't need to worry about the compatibility of your bundler.
