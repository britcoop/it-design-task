import React from "react";
import { render } from "react-dom";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  top: 50;
  left: 50;
  position: absolute;
`;

const Btn = styled.button`
  top: 0;
  left: 0;
  position: absolute;
`;

const Square = posed.div({
  fullscreen: {
    width: "100vw",
    height: "100vh",
    transition: tween
  },
  idle: {
    width: 100,
    height: 100,
    transition: tween
  }
});

const StyledSquare = styled(Square)`
  background: red;
`;

const ItemList = ({ items }) => (
  <ul>
    <PoseGroup>
      {items.map(item => <StyledSquare key={item.id}>{item.text}</StyledSquare>)}
    </PoseGroup>
  </ul>
);

class Header extends React.Component {
  state = {
    active: false
  };

  render() {
    return (
      <Container>
        <StyledSquare
          pose={this.state.active ? "fullscreen" : "idle"}
          onClick={() => this.setState({ active: true })}
        />
        {this.state.active && (
          <Btn type="button" onClick={() => this.setState({ active: false })}>
            Close!
          </Btn>
        )}
      </Container>
    );
  }
}

export default Header;
// render(<App />, document.getElementById("root"));
