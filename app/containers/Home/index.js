import React from 'react';
import { Helmet } from 'react-helmet';

import Slider from './components/Slider';
import ChooseUs from './components/ChooseUs';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Home Page of MySite" />
        </Helmet>
        <Slider></Slider>
        <ChooseUs></ChooseUs>
      </div>
    );
  }
}

export default HomePage;
