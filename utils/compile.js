const precompile = require('art-template/lib/precompile')

// precompile src/template/player.art to dist/player.js
const options = {
    filename: 'some_prefix/list-item.art',
}
const compiledFunction = precompile(options).code

const fs = require('fs')
fs.writeFileSync('some_prefix/list-item.js', compiledFunction)