import React from 'react';

import { ToastProvider } from './toast';
import { ProductProvider } from './product';
import { AuthProvider } from './auth';
import { CardProvider } from './card';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <ProductProvider>
      <AuthProvider>
        <CardProvider>{children}</CardProvider>
      </AuthProvider>
    </ProductProvider>
  </ToastProvider>
);

export default AppProvider;
