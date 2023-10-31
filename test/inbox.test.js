const assert = require('assert');
const { default: Ganache } = require('ganache');
const Web3 = require('web3');
const web3 = new Web3(Ganache.provider()); 