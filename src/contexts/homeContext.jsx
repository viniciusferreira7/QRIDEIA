import React, { createContext, useReducer } from 'react';
import P from 'prop-types';

import { globalState } from './globalState';

export const Context = createContext();

//eslint-disable-next-line
const reduce = (state, action) => {
  switch (action.type[0]) {
    case 'newUser': {
      return { ...state, name: action.type[1], lastName: action.type[2], passaword: action.type[3] };
    }

    case 'event': {
      return { ...state, home: false, events: true, users: false, reports: false };
    }

    case 'user': {
      return { ...state, home: false, events: false, users: true, reports: false };
    }

    case 'report': {
      return { ...state, home: false, events: false, users: false, reports: true };
    }

    case 'des': {
      return { ...state, name: '', lastName: '', passaword: '' };
    }
  }
  return { ...state };
};

function HomeContext({ children }) {
  const [state, dispatch] = useReducer(reduce, globalState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

HomeContext.propTypes = {
  children: P.node,
};

export default HomeContext;
