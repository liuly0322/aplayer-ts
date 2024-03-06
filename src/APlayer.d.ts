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

interface APlayerOptions {
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

export const enableFixedModeOnce: () => void;

export default class APlayer {
  audio: HTMLAudioElement;
  mode: 'mini' | 'normal';

  constructor(options: APlayerOptions);
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
    add(audios: Audio[] | Audio): void;
    remove(index: number): void;
    switch(index: number): void;
    clear(): void;
  };
}
