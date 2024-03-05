# import play from '../assets/play.svg';
# import pause from '../assets/pause.svg';
# import volumeUp from '../assets/volume-up.svg';
# import volumeDown from '../assets/volume-down.svg';
# import volumeOff from '../assets/volume-off.svg';
# import orderRandom from '../assets/order-random.svg';
# import orderList from '../assets/order-list.svg';
# import menu from '../assets/menu.svg';
# import loopAll from '../assets/loop-all.svg';
# import loopOne from '../assets/loop-one.svg';
# import loopNone from '../assets/loop-none.svg';
# import loading from '../assets/loading.svg';
# import right from '../assets/right.svg';
# import skip from '../assets/skip.svg';
# import lrc from '../assets/lrc.svg';

# 任务描述：
# 1. 读取 src/assets 所有的 svg 文件
# 2. 改写成 const play = `...` 字符串的形式。字符串的内容就是 svg 文件的内容

# svg 可能有多行，每一行可以 trim 空白并合并成一行

# 读取文件
import os

file_path = './src/assets'
svg_list = os.listdir(file_path)

for svg in svg_list:
    with open(f'{file_path}/{svg}', 'r', encoding='utf-8') as f:
        content = f.read()
        # trim every line
        lines = [line.strip() for line in content.split('\n')]
        # join every line
        content = ''.join(lines)
        print(f'const {svg[:-4]} = `{content}`;')