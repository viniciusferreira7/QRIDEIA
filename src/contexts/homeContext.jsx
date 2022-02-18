import React, { createContext } from 'react';
import P from 'prop-types';

import { globalState } from './globalState';

export const Context = createContext();

//eslint-disable-next-line
const reduce = (state, action) => {
  return { ...state };
};

function HomeContext({ children }) {
  return <Context.Provider value={(reduce, globalState)}>{children}</Context.Provider>;
}

HomeContext.propTypes = {
  children: P.node,
};

export default HomeContext;
