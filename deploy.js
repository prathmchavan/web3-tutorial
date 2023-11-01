const HDWalletProvider = require('@truffle/hdwallet-provider')
const { interface , bytecode } = require('./compile')
const { default: Web3 } = require('web3')


const provider = new HDWalletProvider(


    'outside family furnace youth ski embark detect creek neglect expose horror snow',
    'https://goerli.infura.io/v3/65b91f3c0a2e4c50a1833b49f8570190S'


);


const web3 = new Web3(provider);



const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();


    console.log('attempting to deploy from account ',accounts[0])

const result =     await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode , arguments:['ola working']})
    .send({gas:'1000000', from :accounts[0]});


    console.log('contract deployed to ', result.options.address)
    provider.engine.stop(); 
}

deploy(); 