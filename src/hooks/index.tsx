import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { CardProvider } from './card';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <CardProvider>{children}</CardProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
