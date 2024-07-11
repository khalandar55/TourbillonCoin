const TourbillonCoin = artifacts.require("TourbillonCoin");

module.exports = function (deployer) {
    console.log("Deploying TourbillonCoin contract...");
    deployer.deploy(TourbillonCoin)
        .then(() => {
            console.log("TourbillonCoin deployed successfully!");
        })
        .catch(error => {
            console.error("Deployment failed:", error);
        });
};
