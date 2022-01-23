import { useCallback, useState } from 'react';
import {
  Avatar,
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
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import { useWeb3 } from '@3rdweb/hooks';
import { transferTokensFromTo } from '../utils/web3';
import MotionBox from './MotionBox';

interface Props {
  myAddress: string | undefined;
  toAddress: string | undefined;
  avatarUrl: string | undefined;
}

const SendDavidcoinsPopover: React.FunctionComponent<Props> = ({ myAddress, toAddress, avatarUrl }) => {
  const { provider } = useWeb3();
  const toast = useToast();
  const [value, setValue] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const updateAmount = useCallback((value: string) => {
    setValue(Number(value));
  }, []);

  const resetState = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false);
      setValue(0);
    }, 750);
  }, []);

  const onClickSend = useCallback(() => {
    if (myAddress && toAddress && value > 0) {
      const signer = provider?.getSigner();
      if (signer) {
        transferTokensFromTo(signer, toAddress, value.toString()).catch((err) => {
          const { message } = err?.data;
          const notEnoughTokens = message?.includes('transfer amount exceeds balance');
          const title = notEnoughTokens ? "Transaction failed: you don't have enough Davidcoins" : message;
          const description = notEnoughTokens ? 'You can answer questions in the Quiz to earn some ;)' : '';
          toast({
            title,
            description,
            position: 'top',
            status: 'error',
            duration: 3500,
          });
        });
      }
      resetState();
    }
  }, [myAddress, provider, resetState, toAddress, toast, value]);

  return (
    <Popover placement="right" onClose={resetState} isOpen={isOpen}>
      <PopoverTrigger>
        <MotionBox whileHover={{ scale: 1.5 }} onClick={() => setIsOpen(true)}>
          <Tooltip label="Click to send Davidcoins" placement="right">
            <Avatar src={avatarUrl} bg="transparent" mx="2" size="sm" cursor="pointer" zIndex={0} />
          </Tooltip>
        </MotionBox>
      </PopoverTrigger>
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
