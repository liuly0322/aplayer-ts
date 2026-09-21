import os

file_path = './src/assets'
name_map = {
    'order-random': 'orderRandom',
    'volume-up': 'volumeUp',
    'volume-down': 'volumeDown',
    'volume-off': 'volumeOff',
    'loop-one': 'loopOne',
    'order-list': 'orderList',
    'loop-all': 'loopAll',
    'loop-none': 'loopNone',
}

svg_list = sorted(os.listdir(file_path))

for svg in svg_list:
    with open(f'{file_path}/{svg}', 'r', encoding='utf-8') as f:
        content = f.read()
        # trim every line
        lines = [line.strip() for line in content.split('\n')]
        # join every line
        content = ''.join(lines)
        # The SVGs are inserted into HTML, where these XML-only attributes
        # are unnecessary. Keep the source SVGs standalone, but omit them
        # from the inline strings used by the JavaScript bundle.
        content = content.replace(' xmlns="http://www.w3.org/2000/svg"', '')
        name = name_map.get(svg[:-4], svg[:-4])
        print(f'export const {name} = `{content}`;')
