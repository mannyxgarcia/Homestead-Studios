import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LandingPage from '../components/Landing';
import Projects from '../components/Projects';
import Contact from './Contact';
import Services from '../components/Services.js';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            {/* Projects */}
            <Route exact path='/projects' component={Projects} />
            {/* Services */}
            <Route exact path='/services' component={Services} />
            <Route
              exact
              path='/estimate'
              component={() => <div>Estimate</div>}
            />
            {/* Contact */}
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
