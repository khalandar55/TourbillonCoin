async function main() {
    const { ethers } = require("hardhat");

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const TourbillonCoin = await ethers.getContractFactory("TourbillonCoin");
    const initialSupply = ethers.utils.parseUnits("1000000", 18);
    const tourbillonCoin = await TourbillonCoin.deploy(initialSupply);

    console.log("TourbillonCoin deployed to:", tourbillonCoin.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
