// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

//Implementation or Logic Contract
contract Box {
    uint256 internal value;
    event valueChanged(uint256 newVale);

    function store(uint256 newValue) public {
        value = newValue;
        emit valueChanged(newValue);
    }

    function retrieve() public view returns (uint256) {
        return value;
    }

    function version() public pure returns (string memory) {
        return '1.0';
    }
}
