import React from 'react';
import { Helmet } from 'react-helmet';

import Slider from './components/Slider/slider';
import ChooseUs from './components/ChooseUs';
import GreatePosibilities from './components/GreatePosibilities';
import Testimonials from './components/Testimonials';
import Team from './components/Team';

// eslint-disable-line react/prefer-stateless-function
export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Home Page of MySite" />
        </Helmet>
        <Slider />
        <ChooseUs />
        <GreatePosibilities />
        <Testimonials />
        <Team />
      </div>
    );
  }
}

export default HomePage;
