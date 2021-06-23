import React from 'react';

import { ToastProvider } from './toast';
import { ProductProvider } from './product';
import { AuthProvider } from './auth';
import { CardProvider } from './card';
import { PurchaseProvider } from './purchase';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <ProductProvider>
      <AuthProvider>
        <CardProvider>
          <PurchaseProvider>{children}</PurchaseProvider>
        </CardProvider>
      </AuthProvider>
    </ProductProvider>
  </ToastProvider>
);

export default AppProvider;
