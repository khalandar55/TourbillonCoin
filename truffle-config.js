/*const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'train coconut sword breeze pair weather raccoon buyer wrist retire always erode'; // Replace with your MetaMask seed phrase
const infuraProjectId = '19317a2539a94d6980ca5ca6ac48cacd'; // Replace with your Infura project ID

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraProjectId}`),
      network_id: 11155111,       // Sepolia's network ID
      gas: 5500000,               // Sepolia has a lower block limit than mainnet
      confirmations: 2,           // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,         // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true            // Skip dry run before migrations? (default: false for public nets )
    },
    // You can add other network configurations here (like mainnet, rinkeby, etc.)
  },
  compilers: {
    solc: {
      version: "0.8.20",           // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
*/


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545,        // Standard Ethereum port for Ganache
      network_id: "5777",   // Any network (default: none)
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",  // Fetch exact version from solc-bin (default: truffle's version)
      gas: 8000000,
    },
  },
};
