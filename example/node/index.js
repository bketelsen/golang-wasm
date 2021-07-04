const gw = require('./wasm.js');

const { hello, helloName, divide } = gw;


const run = async () => {
    const h = await hello();
    console.log(h)
}

run()
