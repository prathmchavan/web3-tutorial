const assert = require('assert');
const { default: Ganache } = require('ganache');
const Web3 = require('web3');
const { accounts } = require('web3/lib/commonjs/eth.exports');
const web3 = new Web3(Ganache.provider()); 
const {interface, bytecode} = require('../compile')




let inbox;


beforeEach(async()=>{

    accounts= await web3.eth.getAccounts();

  inbox=await  new web3.eth.Contract(JSON.parse(interface))
     .deploy({data:bytecode, arguments:['hi there']})
     .send({from:accounts[0],gas:'1000000'})
})



describe('inbox',()=>{
    it('deploy a contract', ()=>{
        assert.ok(inbox.options.address )
    })
})