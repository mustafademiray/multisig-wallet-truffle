import Web3 from 'web3';
import Multisig from './contracts/Multisig.json';
import detectEthereumProvider from '@metamask/detect-provider';

// const getweb3 = () => {
//     return new Promise((resolve, reject) => {
//         window.addEventListener('load', async () => {
//             if(window.ethereum){
//                 const web3 = new Web3(window.ethereum);
//                 try {
//                     await window.ethereum.enable();
//                     resolve(web3);
//                 } catch(error){
//                     reject(error);
//                 }
                
//             } else if(window.web3) {
//                 resolve(window.web3);
//             } else {
//                 reject('Metamask is must be installed.');
//             }
//         });
//     });
// };

const getweb3 = () => new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
        await provider.request({ method: 'eth_requestAccounts' });
        try {
            const web3 = new Web3(window.ethereum);
            resolve(web3);
        } catch(error) {
            reject(error);
        }
    } reject('Install Metamask');
});


const getWallet = async web3 => {
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Multisig.networks[networkId];
    return new web3.eth.Contract(
        Multisig.abi,
        deployedNetwork && deployedNetwork.address
    );
};

export { getweb3, getWallet };