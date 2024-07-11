const TourbillonCoin = artifacts.require("TourbillonCoin");

contract("TourbillonCoin", accounts => {
  it("should have correct name and symbol", async () => {
    const tourbillonCoin = await TourbillonCoin.deployed();
    const name = await tourbillonCoin.name();
    assert.equal(name, "TourbillonCoin");

    const symbol = await tourbillonCoin.symbol();
    assert.equal(symbol, "TBC");
  });

  it("should mint initial supply to the deployer account", async () => {
    const tourbillonCoin = await TourbillonCoin.deployed();
    const totalSupply = await tourbillonCoin.totalSupply();
    const balance = await tourbillonCoin.balanceOf(accounts[0]);

    assert.equal(balance.toString(), totalSupply.toString());
  });
});
