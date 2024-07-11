/*module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
      gas: 8000000,  // Increase gas limit
      gasPrice: 20000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",
    }
  }
};
*/

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "YOUR_INFURA_PROJECT_ID";
const mnemonic = "YOUR_WALLET_MNEMONIC";

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",
    }
  }
};
