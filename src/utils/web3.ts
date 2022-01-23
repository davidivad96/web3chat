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

export const mintTokensTo = async (to: string, value: string) => {
  return defaultToken.mintTo(to, ethers.utils.parseUnits(value, 18));
};

export const transferTokensFromTo = async (provider: ValidProviderInput, to: string, value: string) => {
  const sdk = new ThirdwebSDK(provider);
  const token = sdk.getTokenModule(CONFIG.TOKEN_CONTRACT_ADDRESS || '');
  return token.transfer(to, ethers.utils.parseUnits(value, 18));
};
