require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food cheap repeat mad honey giraffe light army genuine'; 
let testAccounts = [
"0xa303a6b468fa255324f7c5da7b08f2bb9026ef8651470f7025e0ae5cf792bb0c",
"0xa5903151e431cc2a7277e1d9a7af42d9acedf5d465ac1ef50c28905b27923849",
"0x7978590366d0a59c91eb5c7068340c5f60608e71c9ea73eb3a29943c6550a5c8",
"0xa0af3b324e9d228fba9475db6abe78e259d992bbf0bc14af848f19c592647733",
"0x3e4cbb47c88c1cda55113f330aa4d84209ffa0e62841deaa40f7d9ed8f49584a",
"0x7598bdcc858507f0d688c2fa8119ab318a31341417f0de946b6e0eddd03242f4",
"0x49436e2d4a00f20e5ad172f3f1654b6fac1d42e4a427e3c739c5e30418944e0e",
"0x0e3640240088c6f52e381ffca5b1fae3dec0d26dc919c0c261813963f003e6b2",
"0x78bdaabef107a46dc34732c6f1187a7ffd4158cbf0a51ab0afed19900f70e8a8",
"0x4a4ef9f67012a9757bcbb689dd9b49ecbabf17b85264ba6f94f5255b4328b4d0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

