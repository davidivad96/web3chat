import { useCallback, useState } from 'react';
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
import { transferTokensFromTo } from '../utils/web3';

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

  const onClickSend = useCallback(() => {
    if (myAddress && toAddress && value > 0) {
      console.log('SENDING ', value, ' DAVIDCOINS FROM ', myAddress, ' TO: ', toAddress);
      transferTokensFromTo(myAddress, toAddress, value.toString());
      resetState();
    }
  }, [myAddress, resetState, toAddress, value]);

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
