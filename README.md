This contract is getting created with approver list of wallet addresses. Basically deployed contract will be a multisig wallet owned by the approvers.

Users can create a transaction to be approved by other approvers, approve transactions created by other users.


> You need to have Metamask installed to your browser and add your truffle RPC as a custom RPC network. 
```sh
Network Name: Localhost 9545
New RPC URL : http://localhost:9545
Chain Id    : 1337
```


### Installation

1. Clone the repo first
```
git clone -b multisig-wallet https://github.com/mustafademiray/multisig-wallet-truffle.git multisig-wallet
cd multisig-wallet
```

2. Install dependencies
```
npm install -g truffle    //truffle is for local blockchain development
cd client //for front-end dependencies
npm install
```

3. If we have all the dependencies installed, we are ready to create a local blockchain and deploy this contract.
```
cd multisig-wallet
truffle develop  // You should see 10 local wallet addresses and their private keys.
deploy  // In truffle interface, deploy your contract with hard-coded constructor parameters.
```

> Since we have added our network to Metamask, import one of those addresses to Metamask. Constructor parameters can be found in migration files.
```typescript
// first three accounts from the local blockchain owns the contract
await deployer.deploy(Multisig, [accounts[0], accounts[1], accounts[2]], 2); 
```

4. Open up a second terminal window, navigate to client folder and run the front-end.
```
cd multisig-wallet\client 
npm start
```

5. Test
```
cd multisig-wallet 
truffle test
```
