import {ethers} from 'ethers';

export const provider = async () => {
    await window.ethereum.enable();

    console.log("ethersjs", ethers)
    return new ethers.providers.Web3Provider(window.ethereum);
}