import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { InlineBlock, Button, Popover, withPopoverState } from 'reas';
import Hello from "./Hello";
import Task from "./Task";
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  font-family: Tahoma;
`;

const ButtonStyled = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
` ;


// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

var Alert = require('react-bootstrap').Alert;
var Navbar = require('react-bootstrap').Navbar;

const NavButtonStyled = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 1px palevioletred;
`;

const NavBarStyled = styled(Navbar)`
  display:flex;
  flex-flow: row wrap;
  align-content: stretch;
  align-items: center;

`;

// The code that will get rendered when running the page
const App = withPopoverState(({ popover }) => (
  <div>
  <NavBarStyled>
    <NavButtonStyled children="File" />
    <NavButtonStyled children="Profile" />
    <NavButtonStyled children="About" />
  </NavBarStyled>
  <InlineBlock relative>
    <Button as={Popover.Toggle} {...popover}>Click me</Button>
    <Popover {...popover}>
      <Popover.Arrow />
      This is a pretty neat popup
    </Popover>
    </InlineBlock>
    <Wrapper>
    <Title>
      Hello World, this is my first styled component!
    </Title>
  </Wrapper>

  <Alert children="hey" />
  
</div>
));

const rootElement = document.getElementById("root")

function tick( ){
  const time = new Date().toLocaleTimeString();
  console.log("time is now " + time);
  const element = <div>It is {time}</div>
  ReactDOM.render(element, rootElement);
}

setInterval(tick, 1000)

//render(<App />, document.getElementById("root"));
