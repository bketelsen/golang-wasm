const gw = require('./wasm.js');

const { hello, helloName, bloxRuntime } = gw;


const run = async () => {
    const h = await hello();
    const rt = await bloxRuntime();

    const hname = await helloName("Brian");
    console.log(h)

    console.log(hname)
    console.log(rt);
}

run()
