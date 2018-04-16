import React, {Component} from 'react';
import { render, ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import AccountsUI from '../accounts-ui.jsx';
import ResolutionsWrapper from '../comps/resolutions/ResolutionsWrapper.jsx';
import MyNavbar from '../comps/navbar/navbar.jsx'
import About from './About.jsx';
import DemoCarousel from '../comps/carousel/carouselLayout.jsx';
import Footer from '../comps/Footer/Footer.jsx';
import Divider from '../comps/Divider/Divider.jsx';
import TrackImpact from '../comps/TrackImpact/TrackImpact.jsx';
import Results from '../comps/Results/Results.jsx';
import IndividualLawPage from '../comps/IndividualLawPage/IndividualLawPage.jsx';
import BusinessQuiz from '../comps/quizzes/BusinessQuiz.jsx';
import ContractorSignUp from '../comps/Forms/ContractorSignUp.jsx';
import Home from './Home.jsx';
import Demo from './Demo.jsx';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        <MyNavbar />
      </header>

      <main>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={ContractorSignUp} />
          </Switch>
        </Router>
      </main>

      <footer>
      <Footer />
      </footer>

    </div>
  );
 }

 export default MainLayout;
