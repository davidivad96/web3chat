import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';
import CONFIG from '../config';

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    CONFIG.PRIVATE_KEY as string,
    ethers.providers.getDefaultProvider('https://rpc-mumbai.maticvigil.com/'),
  ),
);
const token = sdk.getTokenModule('0xA2cFC4Aec4c03aDF1074aF3d9839C97EEA09D86b');

export const mintTokensTo = (to: string, value: string) => {
  token.mintTo(to, ethers.utils.parseUnits(value, 18));
};

export const transferTokensFromTo = (from: string, to: string, value: string) => {
  token.transferFrom(from, to, ethers.utils.parseUnits(value, 18));
};
