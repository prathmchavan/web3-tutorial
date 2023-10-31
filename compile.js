const path = require('path');
const fs = require('fs');
const solc = require('solc');



const inboxPath = path.resolve(__dirname,'contract','inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');


let input = {
    language: "Solidity",
    sources: {
      [inboxPath]: {
        content: source,
      },
    },
  
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  var output = JSON.parse(solc.compile(JSON.stringify(input)));

  exports.abi = output.contracts['inbox.sol']['inbox'].abi;
  exports.bytecode = output.contracts['inbox.sol'] ['inbox'].evm.bytecode.object;