import React from 'react';
import {
  SectionHeader,
  Line,
  H2,
  SectionBody,
  ItemTitle,
  ItemDescription,
} from '../index';

import text from './text';

const ChooseUs = () => (
  <section>
    <SectionHeader>
      <H2>{text.title}</H2>
      <Line />
      <p>{text.description}</p>
    </SectionHeader>
    <SectionBody>
      {text.listItems.map((item) => (
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img src={item.image} alt="gg" />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </div>
            <div className="back">
              <h3>{item.title}</h3>
              <Line color="white" width="10%" />
              <p>{item.description}</p>
              <a>READ MORE</a>
            </div>
          </div>
        </div>
      ))}
    </SectionBody>
  </section>
);

export default ChooseUs;
