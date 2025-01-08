<p align="center">
<img src="https://i.imgur.com/LnPvZvO.png" alt="ADPlayer" width="100">
</p>
<h1 align="center">APlayer-ts</h1>

> Wow, such a lovely HTML5 music player

[APlayer](https://github.com/MoePlayer/APlayer/), but:

- ESM import/export;
- TypeScript interface support;
- Includes a patch fixes [APlayer#283](https://github.com/DIYgod/APlayer/issues/283);
- Bundle size **from 58KB to less than 30KB**. See this [blog post](https://blog.liuly.moe/posts/tree-shaking) for details.

> The name 'APlayer-ts' might be a bit misleading, well I just modified APlayer for my personal usage years ago and picked a random name :)

## Usage

Basic usage:

```TypeScript
import APlayer from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'

const instance = APlayer()
    .init({ /* refer to the aplayer doc */ })
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
