const TourbillonCoin = artifacts.require("TourbillonCoin");

module.exports = function (deployer) {
    const initialSupply = web3.utils.toWei('1000000', 'ether'); // 1 million tokens with 18 decimals
    deployer.deploy(TourbillonCoin, initialSupply);
};
