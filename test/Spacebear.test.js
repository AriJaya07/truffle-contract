const Spacebear = artifacts.require("Spacebear");
const truffleAsserts = require("truffle-assertions")

contract("Spacebear", (accounts) => {
    it("should credit an NFT to specific account", async () => {
        const spacebearInstance = await Spacebear.deployed();
        let txResult = await spacebearInstance.safeMint(accounts[1], "spacebear_1.json");
        // assert.equal(txResult.logs[0].event, "Transfer", "Event is not transfer Event");
        // assert.equal(txResult.logs[0].args.from, "0x0000000000000000000000000000000000000000", "From is not the zero address");
        console.log(txResult.logs[0].args);
        truffleAsserts.eventEmitted(txResult, "Transfer", { from: '0x0000000000000000000000000000000000000000', to: accounts[1], tokenId: web3.utils.toBN("0")});
        assert.equal(await spacebearInstance.ownerOf(0), accounts[1], "Owner of token 1 is not equal accounts 2");
    })
})