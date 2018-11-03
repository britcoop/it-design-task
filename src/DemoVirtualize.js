/* eslint-disable react/no-multi-comp */

import React from 'react';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

const testimonials = [
  {
    name: 'Serge Parisien',
    title: 'Manager, Enterprise Architecture',
    content: '“The documentation that supports the program was shared with us during and after the session in the form of heat maps, business capabilities models, and architecture diagrams. These documents were practical and effective in our discussions with stakeholders.”'
  },
  {
    name: 'Dave Roach',
    title: 'Chief Information Officer',
    content: '“I accomplished my goals of trying to create the strategic pillars and having a structure that would live on for years to come, as well as getting into the weeds on the things we want to get very specific on for the next three years. With Info-Tech’s help, we accomplished both.”'
  },
  {
    name: 'Mark Hubbard',
    title: 'Chief Information Officer',
    content: '“We started seeing results from the Agile workshop almost immediately. This was apparent through more team collaboration, IT and product engagement, and more measurable business value through enhancements delivered to production for our customers in shorter development cycles.”'
  },
]

function slideRenderer(params) {
  const { index, key } = params;
  let style;

  switch (mod(index, 3)) {
    case 0:
      style = styles.slide1;
      break;

    case 1:
      style = styles.slide2;
      break;

    case 2:
      style = styles.slide3;
      break;

    default:
      break;
  }

  return (
    <div style={Object.assign({}, styles.slide, style)} key={key}>
      {`slide n°${index + 1}`}
    </div>
  );
}

class DemoVirtualize extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  handleClick = () => {
    this.setState({
      index: 0,
    });
  };

  handleBackClick = () => {
    this.setState({
      index: 1,
    });
  };
  render() {
    const index = this.state.index
    let button

    if(index) {
      button = <Button onClick={this.handleClick}>{'back to main'}</Button>
    } else {
      button = <Button onClick={this.handleBackClick}>{'see what our clients are saying'}</Button>
    }

    return (
      <div>
        <VirtualizeSwipeableViews
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
          slideRenderer={slideRenderer}
        />
        <br />
        {button}
      </div>
    );
  }
}

export default DemoVirtualize;
