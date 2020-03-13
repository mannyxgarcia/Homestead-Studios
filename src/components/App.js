import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/ui/Footer';
import LandingPage from '../components/Landing';
import Projects from '../components/Projects';

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
            <Route
              exact
              path='/showcase'
              component={() => <div>Showcase</div>}
            />
            <Route exact path='/gallery' component={() => <div>Gallery</div>} />

            {/* Services */}
            <Route
              exact
              path='/services'
              component={() => <div>Services</div>}
            />
            <Route
              exact
              path='/estimate'
              component={() => <div>Estimate</div>}
            />
            {/* About */}
            <Route exact path='/about' component={() => <div>About</div>} />
            <Route exact path='/contact' component={() => <div>Contact</div>} />
            <Route
              exact
              path='/vision'
              component={() => <div>Our Vision</div>}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
