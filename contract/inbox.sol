// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.17;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function add(int a, int b) public pure {
        a + b;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}

