

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TourbillonCoin is ERC20 {
    constructor() ERC20("TourbillonCoin", "TBC") {
    }
}
