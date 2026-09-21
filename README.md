<p align="center">
<img src="https://i.imgur.com/LnPvZvO.png" alt="ADPlayer" width="100">
</p>
<h1 align="center">APlayer-ts</h1>

> Wow, such a lovely HTML5 music player

[APlayer](https://github.com/MoePlayer/APlayer/), but:

- JavaScript bundle size **from 58.74 kB to 23.86 kB** for basic usage. See [bundle size](#bundle-size) for measured configurations and this [blog post](https://blog.liuly.moe/posts/tree-shaking) for the approach;
- TypeScript interface support;
- Fixes [APlayer#283](https://github.com/DIYgod/APlayer/issues/283);
- ESM import/export with zero dependencies.

> The name 'APlayer-ts' might be a bit misleading, well I just modified APlayer for my personal usage years ago and picked a random name :)

## Bundle size

Measured on 2026-09-21 with Node.js 22.13.0, the locked Vite 5.1.5 / esbuild 0.19.12 toolchain, and upstream [`aplayer@1.10.1`](https://www.npmjs.com/package/aplayer/v/1.10.1). All entries use the same Vite production defaults with `modulePreload.polyfill: false`. Sizes are emitted, minified asset bytes divided by 1,000 (kB); gzip uses Node's `gzipSync` defaults, separately for JS and CSS.

| Entry | Player | JS | JS gzip | CSS | CSS gzip |
| --- | --- | ---: | ---: | ---: | ---: |
| Basic | APlayer-ts | 23.860 kB | 7.954 kB | 10.205 kB | 2.179 kB |
| Basic | APlayer 1.10.1 | 58.736 kB | 14.459 kB | 12.415 kB | 2.477 kB |
| Demo | APlayer-ts | 26.069 kB | 8.586 kB | 10.205 kB | 2.179 kB |
| Demo | APlayer 1.10.1 | 59.170 kB | 14.712 kB | 12.415 kB | 2.477 kB |
| All plugins | APlayer-ts | 27.008 kB | 8.550 kB | 12.030 kB | 2.465 kB |
| All plugins | APlayer 1.10.1 | 58.736 kB | 14.459 kB | 12.415 kB | 2.477 kB |

## Usage

Basic usage:

```TypeScript
import APlayer from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'

const instance = APlayer()
    .init({ /* refer to the original APlayer doc */ })
```

### API difference

Some APIs have been modified to improve tree-shaking and reduce bundle size.

1. `fixed` option is removed, use `APlayerFixedModePlugin` instead.

```TypeScript
import APlayer, { APlayerFixedModePlugin } from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'
import 'aplayer-ts/src/css/fixed.css' // remember to import the css

const instance = APlayer()
    .use(APlayerFixedModePlugin)
    .init({ /* refer to the original APlayer doc */ })
```

2. `list.add`, `list.remove` and `list.clear` are by default removed, install their plugins if you want to use:

```TypeScript
import APlayer, { addMusicPlugin, removeMusicPlugin, clearMusicPlugin } from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'

const instance = APlayer()
    .use(addMusicPlugin)
    .use(removeMusicPlugin)
    .init({ /* refer to the original APlayer doc */ })

instance.list.add({ /* new audios here */ })
```

3. HLS is by default removed, install `APlayerHlsPlugin` if you want to use:

```TypeScript
import APlayer, { APlayerHlsPlugin } from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'

const instance = APlayer()
    .use(APlayerHlsPlugin)
    .init({ /* refer to the original APlayer doc */ })
```

## Development

```bash
pnpm dev         # start a demo website server
pnpm build       # build the demo website (to view the output size)
```
