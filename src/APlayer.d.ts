type FullScreenType = "web" | "browser";

export class Audio {
  name?: string;
  url?: string;
  artist?: string;
  cover?: string;
  lrc?: string;
  theme?: string;
  type?: string;
}

export interface APlayerOptions {
  container?: HTMLElement;
  mini?: boolean;
  autoplay?: boolean;
  theme?: string;
  loop?: "all" | "one" | "none";
  order?: "list" | "random";
  preload?: "none" | "metadata" | "auto";
  volume?: number;
  mutex?: boolean;
  listFolded?: boolean;
  listMaxHeight?: string;
  lrcType?: number;
  audio?: Audio | Audio[];
  storageName?: string;
  customAudioType?: Record<string, () => void>;
}

export interface APlayer {
  audio: HTMLAudioElement;
  mode: 'mini' | 'normal';

  init(options: APlayerOptions): APlayer;
  use(plugin: Plugin): APlayer;
  play(): void;
  pause(): void;
  seek(time: number): void;
  toggle(): void;
  on(event: string, handler: () => void): void;
  volume(percentage: number, nostorage: boolean): void;
  theme(color: string, index: number): void;
  setMode(mode: "normal" | "mini"): void;
  notice(text: string, time?: number, opacity?: number): void;
  skipBack(): void;
  skipForward(): void;
  destroy(): void;

  lrc: {
    show(): void;
    hide(): void;
    toggle(): void;
  };

  list: {
    show(): void;
    hide(): void;
    toggle(): void;
    switch(index: number): void;
  };
}
export const APlayer: () => APlayer;
export default APlayer

type Plugin = (player: APlayer) => void;
export const APlayerFixedModePlugin: Plugin;

export const addToList: (player: APlayer, audios: Audio[] | Audio) => void;
export const removeFromList: (player: APlayer, index: number) => void;
export const clearList: (player: APlayer) => void;