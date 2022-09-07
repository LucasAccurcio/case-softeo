import { createContext } from 'react';

const warningObject = {
  get foo() {
    throw new Error('You probably forgot to put <MyProvider>.');
  },
};

const Context = createContext(warningObject);

export default Context;
