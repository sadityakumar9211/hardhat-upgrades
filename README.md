1. Upgrade Box -> BoxV2
We will have a proxy contract which will first point to `Box` and then we will point the implementation address to `BoxV2`.

Our Options for using Proxies: 
1. Deploy a proxy contract manually
2. hh deploy also comes built-in with deploying and upgrading contracts using proxy itself. 
    - hardhat-deploy's built-in proxies
3. Openzeppelin Upgrades Plugin

