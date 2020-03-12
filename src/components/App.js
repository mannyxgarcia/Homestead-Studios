import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header />
        Hello
      </ThemeProvider>
    </div>
  );
}

export default App;
