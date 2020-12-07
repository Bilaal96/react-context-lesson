import { createContext } from 'react';

const CurrentUserContext = createContext(undefined);

CurrentUserContext.displayName = 'CurrentUserContext';

export default CurrentUserContext;
