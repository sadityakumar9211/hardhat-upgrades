const {network} = require('hardhat')
const {developmentChains} = require('../helper-hardhat-config.js')
const {verify} = require('../utils/verify')

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()

    log("-----------------------------------")

    const box = await deploy("Box", {
        from: deployer, 
        args: [],
        log: true, 
        waitConfirmations: network.config.blockConfirmations,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy", 
            viaAdminContract: {      //considered good for a number of reasons
                name: "BoxProxyAdmin",
                artifact: "BoxProxyAdmin",
            }
        }
    })
    //verification of contract code
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("Verifying...")
        await verify(box.address, [])
    }

}