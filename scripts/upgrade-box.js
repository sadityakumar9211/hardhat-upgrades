// manual way

async function main() {
    const boxProxyAdmin = await ethers.getContract("BoxProxyAdmin")
    const transparentProxy = await ethers.getContract("Box_Proxy")
    const boxv2 = await ethers.getContract("BoxV2")

    console.log("------------Before upgrading -----------")
    const proxyBoxV1 = await ethers.getContractAt("BoxV2", transparentProxy.address)
    let version = await proxyBoxV1.version()
    console.log("version", version.toString())
    

    const upgradeTx = await boxProxyAdmin.upgrade(transparentProxy.address, boxv2.address)
    await upgradeTx.wait(1)

    //this way ethers knows that the proxy is a proxy and will call the implementation
    //we're gonna call all our functions at transparentProxy address but it will call the implementation BoxV2 and so we need its abi
    console.log("------------After upgrading -----------")
    const proxyBoxV2 = await ethers.getContractAt("BoxV2", transparentProxy.address)
    version = await proxyBoxV2.version()
    console.log("version", version.toString())
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
