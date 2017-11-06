import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlide: [1, 2, 3, 4, 5, 6, 7, 8],
      slideActive: 0,
    };
  }

  setActive = (i) => {
    this.setState({ slideActive: i });
  };

  render() {
    const { numberOfSlide, slideActive } = this.state;
    return (
      <div>
        <nav className="nav">
          <h1>Gummy slider</h1>
          <p className="author">by Lewi Hussey</p>
        </nav>

        <div className="slider">
          <div
            className="slider-inner"
            style={{
              transform: `translateX(-${slideActive * 1440}px) translateZ(0)`,
            }}
          >
            {numberOfSlide.map((item, i) => (
              <div
                key={item[i]}
                className={slideActive === i ? 'slide active' : 'slide'}
              >
                {i}
              </div>
            ))}
          </div>

          <nav className="slider-nav">
            {numberOfSlide.map((item, i) => (
              <div
                key={item[i]}
                className={slideActive === i ? 'active' : null}
                onClick={() => this.setActive(i)}
              />
            ))}
          </nav>
        </div>
      </div>
    );
  }
}
