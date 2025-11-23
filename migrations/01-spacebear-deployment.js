const Spacebear = artifacts.require("Spacebear");

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(Spacebear, accounts[0]);
};