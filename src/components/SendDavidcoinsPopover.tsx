import { useCallback, useMemo, useState } from 'react';
import {
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';
import CONFIG from '../config';

interface Props {
  children: JSX.Element | JSX.Element[];
  myAddress: string | undefined;
  toAddress: string | undefined;
}

const SendDavidcoinsPopover: React.FunctionComponent<Props> = ({ children, myAddress, toAddress }) => {
  const [value, setValue] = useState<number>(0);

  const updateAmount = useCallback((value: string) => {
    setValue(Number(value));
  }, []);

  const resetState = useCallback(() => {
    setValue(0);
  }, []);

  const token = useMemo(() => {
    const sdk = new ThirdwebSDK(
      new ethers.Wallet(
        CONFIG.PRIVATE_KEY as string,
        ethers.providers.getDefaultProvider('https://rpc-mumbai.maticvigil.com/'),
      ),
    );
    return sdk ? sdk.getTokenModule('0xA2cFC4Aec4c03aDF1074aF3d9839C97EEA09D86b') : undefined;
  }, []);

  const onClickSend = useCallback(() => {
    if (token && myAddress && toAddress && value > 0) {
      console.log('SENDING ', value, ' DAVIDCOINS FROM ', myAddress, ' TO: ', toAddress);
      const amount = ethers.utils.parseUnits(value.toString(), 18);
      token.transferFrom(myAddress, toAddress, amount);
      resetState();
    }
  }, [myAddress, resetState, toAddress, token, value]);

  return (
    <Popover placement="right" onClose={resetState}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader fontSize="large" fontWeight="bold">
            Send Davidcoins
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <NumberInput min={0} value={value} onChange={updateAmount}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </PopoverBody>
          <PopoverFooter>
            <Button colorScheme="blue" onClick={onClickSend}>
              Send
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default SendDavidcoinsPopover;
