require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan rate pizza hole hope ensure slot gaze'; 
let testAccounts = [
"0x0c5b125d748c4b9517ba1e45a339635d37f1bb356d6448a931af638403ff4955",
"0xaaa03d09f5534a2494f626f6685a81fa03f539a26d76fb5f8e7634b368994493",
"0x8ab76b109ce8deea0cefe00e0fb75d736fe68417b869a3f3e9d70ea833a5c66a",
"0x7a99344c5113294c1ab39a34682f0a693f31c6af40a43282ad59cd764db5401e",
"0x0f1ad4535bd87ad23b2b47c1a71492cba85219948c2c05331d591dfa65809040",
"0x15b2e9d6a05e05a818283f8c0227d0e5da33cff75a3d1e9d0738c6e50a27421e",
"0x86f65c3f418cbddcaaa1eb7aba0c9e1e0d1d3c3af23a74ede2743b948ec0bd0a",
"0xfb70716aac0b66ef5efae21396ac25cadbdb759faf2852ef79c742adb5cbe888",
"0xe6149658270aab4a5a3b8ed5a222244ba01442003e152560e1e1e08c4fc0a3df",
"0xca57b4e1d29dfa9a209d022d1e2ae5b04a57f6544831014cfe59b0ae5bb9ebd5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


