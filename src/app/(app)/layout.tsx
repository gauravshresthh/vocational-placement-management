'use client';

import { store } from '@/store/store';
import { Provider } from 'react-redux';

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppLayout;
