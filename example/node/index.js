const gw = require('./wasm.js');

const { hello, helloName, divide } = gw;


const run = async () => {
    const h = await hello();

    const hname = await helloName("Brian");
    console.log(h)

    console.log(hname)
}

run()
