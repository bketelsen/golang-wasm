require('./wasm_exec.js')
const fs = require('fs');
const goWasm = require('./bridge.js');
var wasm;
var source = fs.readFileSync('main.wasm');
wasm = new Uint8Array(source);

module.exports = goWasm(wasm)