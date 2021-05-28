import { createContext } from 'react';

export type IEPContextState = {
  isInvalid: boolean;
  setIsInvalid: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialErrorPromptState: IEPContextState = {
  isInvalid: false,
  setIsInvalid: () => {},
};

export default createContext<IEPContextState>(initialErrorPromptState);
