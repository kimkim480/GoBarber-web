import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn/index';

import { AuthProvider } from './hooks/AuthContext';

// import SignUp from './pages/SignUp/index';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
