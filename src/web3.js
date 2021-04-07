import Web3 from 'web3';

let web3 = null;

if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
    //getting Permission to access. This is for when the user has new MetaMask
    window.ethereum.enable();
    // const web3Provider = window.ethereum;
    web3 = new Web3(window.ethereum);
  
}else if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
    // Acccounts always exposed. This is those who have old version of MetaMask

} else {
    // Specify default instance if no web3 instance provided
    const web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    web3 = new Web3(web3Provider);

}

export default web3;