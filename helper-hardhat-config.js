
//all the parameters that are different chain-to-chain.
const networkConfig = {
    // 4: {
    //     name: "rinkeby",
    //     waitConfirmations: 6,
    // },
    31337: {
        name: "hardhat",
        waitConfirmations: 1,
    },
    5: {
        name: "goerli",
        waitConfirmations: 6,
    }
}


const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
