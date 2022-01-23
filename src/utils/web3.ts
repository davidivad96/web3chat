import { ThirdwebSDK, ValidProviderInput } from '@3rdweb/sdk';
import { ethers } from 'ethers';
import CONFIG from '../config';

const defaultSdk = new ThirdwebSDK(
  new ethers.Wallet(
    CONFIG.PRIVATE_KEY as string,
    ethers.providers.getDefaultProvider('https://rpc-mumbai.maticvigil.com/'),
  ),
);
const defaultToken = defaultSdk.getTokenModule(CONFIG.TOKEN_CONTRACT_ADDRESS || '');

export const mintTokensTo = (to: string, value: string) => {
  defaultToken.mintTo(to, ethers.utils.parseUnits(value, 18));
};

export const transferTokensFromTo = (provider: ValidProviderInput, to: string, value: string) => {
  const sdk = new ThirdwebSDK(provider);
  const token = sdk.getTokenModule(CONFIG.TOKEN_CONTRACT_ADDRESS || '');
  token.transfer(to, ethers.utils.parseUnits(value, 18));
};
