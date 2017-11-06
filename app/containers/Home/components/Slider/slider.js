import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlide: [1, 2, 3, 4, 5, 6, 7, 8],
      slideActive: 0,
      viewWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    this.updateViewWidth();
    window.addEventListener('resize', this.updateViewWidth);
  }

  componentWillUnmount() {
    window.removeEventListner('resize', this.updateViewWidth);
  }

  setActive = (i) => {
    this.setState({ slideActive: i });
  };

  updateViewWidth = () => {
    this.setState({ viewWidth: window.innerWidth, slideActive: 0 });
  };

  render() {
    const { numberOfSlide, slideActive, viewWidth } = this.state;
    return (
      <div>
        <nav className="nav">
          <h1>Gummy slider</h1>
          <p className="author">by Lewi Hussey</p>
        </nav>

        <div
          className="slider"
          style={{
            width: viewWidth,
          }}
        >
          <div
            className="slider-inner"
            style={{
              transform: `translateX(-${slideActive *
                viewWidth}px) translateZ(0)`,
              width: viewWidth * numberOfSlide.length,
            }}
          >
            {numberOfSlide.map((item, i) => (
              <div
                key={item[i]}
                style={{
                  width: viewWidth,
                  left: viewWidth * i,
                }}
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
