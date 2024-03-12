<p align="center">
<img src="https://i.imgur.com/LnPvZvO.png" alt="ADPlayer" width="100">
</p>
<h1 align="center">APlayer-ts</h1>

> Wow, such a lovely HTML5 music player

Fully ESM version of [APlayer](https://github.com/MoePlayer/APlayer/) with TypeScript support. With Rollup and esbuild, [index.min.js](build/index.min.js) is **50% smaller** than the original [APlayer.min.js](dist/APlayer.min.js), from 58KB to less than 30KB.

## Why this

See this [blog post](https://blog.liuly.moe/posts/tree-shaking).

1. TypeScript
2. ESM (APlayer only exports `APlayer.min.js`, which is not friendly to code optimization)
3. Tree-Shaking, see [API difference](#api-difference)
   ```shell
   # only import APlayer constructor
   demo_build/index.html                  1.95 kB │ gzip: 0.79 kB
   demo_build/assets/index-3p8iLQ3k.css  10.22 kB │ gzip: 2.19 kB
   demo_build/assets/index-DDEVMoCF.js   27.37 kB │ gzip: 8.66 kB
   # import everything
   demo_build/index.html                  1.95 kB │ gzip: 0.79 kB
   demo_build/assets/index-Bi0rxlmU.css  12.04 kB │ gzip: 2.47 kB
   demo_build/assets/index-CTXYaVj8.js   30.44 kB │ gzip: 9.23 kB
   ```

`APlayer.min.js` is still in `dist` folder, but by default this package exports `src/js/index.js`.

It also includes a patch which fixes [APlayer#283](https://github.com/DIYgod/APlayer/issues/283).

## Usage

Basic usage:

```TypeScript
import APlayer from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'

const instance = APlayer()
    .init({ /* refer to the aplayer doc */ })
```

### API difference

1. `fixed` option is removed, use `APlayerFixedModePlugin` instead.

```TypeScript
import APlayer, { APlayerFixedModePlugin } from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'
import 'aplayer-ts/src/css/fixed.css' // remember to import the css

const instance = APlayer()
    .use(APlayerFixedModePlugin)
    .init({ /* refer to the aplayer doc */ })
```

2. `list.add`, `list.remove` and `list.clear` are by default removed, install their plugins if you want to use:

```TypeScript
import APlayer, { addMusicPlugin, removeMusicPlugin, clearMusicPlugin } from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'

const instance = APlayer()
    .use(addMusicPlugin)
    .use(removeMusicPlugin)
    .init({ /* refer to the aplayer doc */ })

instance.list.add({ /* new audios here */ })
```

3. HLS is by default removed, install `APlayerHlsPlugin` if you want to use:

```TypeScript
import APlayer, { APlayerHlsPlugin } from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'

const instance = APlayer()
    .use(APlayerHlsPlugin)
    .init({ /* refer to the aplayer doc */ })
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
