// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//Implementation or Logic Contract
contract BoxV2 {
    uint256 internal value;
    event valueChanged(uint256 newVale);

    function store(uint256 newValue) public {
        value = newValue;
        emit valueChanged(newValue);
    }
    function retrieve() public view  returns (uint256) {
        return value;
    }

    function increment() public returns (uint256){
        value = value + 1;
        emit valueChanged(value);
        return value;
    }

    function version() public pure returns (string memory) {
        return "2.0";
    }

}