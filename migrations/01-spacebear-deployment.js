const Spacebear = artifacts.require("Spacebear");

module.exports = async function (deployer) {
    await deployer.deploy(Spacebear);
};